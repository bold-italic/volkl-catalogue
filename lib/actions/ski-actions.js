"use server";
import dbConnect from "../dbConnect";
import Ski from "../models/Ski";

dbConnect();

// Fetches all skis
export async function getAllProducts(searchParams) {
  const search = searchParams?.search || "";
  const sort = searchParams?.sort || "name";
  try {
    const skis = await Ski.find({
      name: { $regex: search, $options: "i" },
    }).sort(sort);

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
