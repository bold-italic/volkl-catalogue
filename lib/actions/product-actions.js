"use server";
import dbConnect from "../dbConnect";
import Product from "../models/Products";

dbConnect();

// Fetches all products
export async function getAllProducts(searchParams) {
  const search = searchParams?.search || "";
  const sort = searchParams?.sort || "name";
  const tag = searchParams?.tag || ""; // Add this line to get the tag parameter
  const category = searchParams?.category || ""; // Add this line to get the category parameter
  const featured = searchParams?.featured || ""; // Add this line to get the featured skis parameter

  try {
    const query = { name: { $regex: search, $options: "i" } };

    if (tag) {
      query.tag = tag;
    }

    if (category) {
      query.category = category;
    }

    if (featured) {
      query.featured = featured;
    }

    const products = await Product.find(query).sort(sort);

    const newData = products.map((product) => ({
      ...product._doc,
      _id: product._doc._id.toString(),
    }));

    return { products: newData };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve products!");
  }
}

// Fetches a single product
export async function getOneProduct(productId) {
  try {
    const product = await Product.findById(productId);

    return { ...product._doc, _id: product._doc._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve product!");
  }
}
