"use server";
import dbConnect from "../dbConnect";
import Pole from "../models/Pole";

dbConnect();

/**
 * Fetches all poles
 * @returns an array of pole objects from the collection
 */
export async function getAllProducts(searchParams) {
  const search = searchParams?.search || "";
  const sort = searchParams?.sort || "name";
  const poleLength = searchParams?.poleLength || [];

  try {
    let query = { name: { $regex: search, $options: "i" } };

    if (poleLength.length > 0) {
      query.size = { $in: poleLength };
    }

    const poles = await Pole.find(query).sort(sort);

    const newData = poles.map((pole) => ({
      ...pole._doc,
      _id: pole._doc._id.toString(),
    }));

    return { poles: newData };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve poles!");
  }
}

/**
 * Fetches a single pole
 * @param {*} poleId the id of the pole to fetch
 * @returns the desired pole
 */
export async function getOneProduct(poleId) {
  try {
    const pole = await Pole.findById(poleId);

    return { ...pole._doc, _id: pole._doc._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve pole!");
  }
}
