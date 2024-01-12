"use server";
import dbConnect from "../dbConnect";
import Binding from "../models/Binding";

dbConnect();

// Fetches all bindings
export async function getAllProducts(searchParams) {
  const search = searchParams?.search || "";
  const sort = searchParams?.sort || "name";
  try {
    const bindings = await Binding.find({
      name: { $regex: search, $options: "i" },
    }).sort(sort);

    const newData = bindings.map((binding) => ({
      ...binding._doc,
      _id: binding._doc._id.toString(),
    }));

    return { bindings: newData };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve bindings!");
  }
}

// Fetches a single binding
export async function getOneProduct(bindingId) {
  try {
    const binding = await Binding.findById(bindingId);

    return { ...binding._doc, _id: binding._doc._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve binding!");
  }
}
