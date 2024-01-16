"use server";
import dbConnect from "../dbConnect";
import Ski from "../models/Ski";

dbConnect();

// Fetches all skis
export async function getAllProducts(searchParams) {
  const search = searchParams?.search || "";
  const sort = searchParams?.sort || "name";
  const category = searchParams?.category || ""; // Add this line to get the category parameter
  const featured = searchParams?.featured || ""; // Add this line to get the featured skis parameter

  try {
    const query = { name: { $regex: search, $options: "i" } };

    if (category) {
      query.category = category;
    }

    if (featured) {
      query.featured = featured;
    }

    const skis = await Ski.find(query).sort(sort);

    const newData = skis.map((ski) => ({
      ...ski._doc,
      _id: ski._doc._id.toString(),
    }));

    return { skis: newData };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve skis!");
  }
}

// Fetches a single ski
export async function getOneProduct(skiId) {
  try {
    const ski = await Ski.findById(skiId);

    return { ...ski._doc, _id: ski._doc._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve ski!");
  }
}
