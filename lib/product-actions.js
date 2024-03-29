"use server";
import { dbConnect, client } from "./dbConnect";
import { ObjectId } from "mongodb";

// Fetches all products
export async function getAllProducts(searchParams) {
  await dbConnect();
  const search = searchParams?.search || "";
  const sort = searchParams?.sort || "name";
  const tag = searchParams?.tag || "";
  const category = searchParams?.category || "";
  const featured = searchParams?.featured || "";

  try {
    const db = client.db();
    const collection = db.collection("products");

    const query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { tag: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { age: { $regex: search, $options: "i" } },
        { gender: { $regex: search, $options: "i" } },
        { skiingLevel: { $regex: search, $options: "i" } },
        { color: { $regex: search, $options: "i" } },
      ],
    };

    if (tag) {
      query.tag = tag;
    }

    if (category) {
      query.category = category;
    }

    if (featured) {
      query.featured = featured;
    }

    const products = await collection
      .find(query)
      .sort({
        [sort.startsWith("-") ? sort.slice(1) : sort]: sort.startsWith("-")
          ? -1
          : 1,
      }) // Handle descending order for '-' prefix
      .toArray();

    const newData = products.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));

    return { products: newData };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve products!");
  }
}

// Fetches a single product
export async function getOneProduct(productId) {
  await dbConnect();

  try {
    const isValidObjectId = ObjectId.isValid(productId);

    if (!isValidObjectId) {
      return null; // Product ID is not valid, return null
    }

    const db = client.db();
    const collection = db.collection("products");

    const product = await collection.findOne({ _id: new ObjectId(productId) });

    if (!product) {
      return null; // Product not found
    }

    return { ...product, _id: product._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve product!");
  }
}
