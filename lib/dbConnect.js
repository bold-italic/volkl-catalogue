import { MongoClient } from "mongodb";

const connection = {};
let client;

/**
 * Connects to the database
 */
async function dbConnect() {
  if (connection.isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  const targetURI = process.env.MONGO_URI;

  try {
    client = await MongoClient.connect(targetURI);
    connection.isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export { dbConnect, client };
