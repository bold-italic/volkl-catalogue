import mongoose from "mongoose";

const connection = {};

/**
 * Connects to the database
 */
async function dbConnect() {
  if (connection.isConnected) {
    console.log("Mongodb is already connected");
    return;
  }

  const targetURI = process.env.MONGO_URI;

  try {
    const db = await mongoose.connect(targetURI);
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default dbConnect;
