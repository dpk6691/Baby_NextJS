import { MongoClient } from "mongodb";
import zlib from "zlib";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;
const collectionName = "India";

if (!mongoUri || !dbName) {
  throw new Error("Missing MongoDB URI or Database Name");
}

let cachedData; // Variable to store cached data
let cacheExpiry = 0; // Variable to store cache expiry time

let client;
let db;
let collection;

const connectToMongo = async () => {
  if (!client) {
    client = new MongoClient(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db(dbName);
    collection = db.collection(collectionName);
  }
};

export default async function handler(req, res) {
  try {
    console.log("Request received at:", new Date().toISOString());

    // Check if cached data is still valid
    if (cachedData && Date.now() < cacheExpiry) {
      console.log("Serving cached data at:", new Date().toISOString());
      // Serve data from cache
      const compressedData = zlib.gzipSync(JSON.stringify(cachedData));
      res.setHeader("Content-Encoding", "gzip");
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Content-Length", compressedData.length);
      res.setHeader("Cache-Control", "max-age=259200"); // Cache for 3 days
      res.status(200).end(compressedData);
      return;
    }

    console.log("Fetching data from MongoDB at:", new Date().toISOString());

    // Connect to MongoDB
    await connectToMongo();

    // Fetch data from MongoDB with a timeout
    const fetchDataWithTimeout = async (timeoutMs) => {
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(
          () => reject(new Error("Request timed out")),
          timeoutMs
        );

        collection
          .find({})
          .project({
            gender: 1,
            culture: 1,
            name: 1,
            language: 1,
            meaning_of_name: 1,
            meaning_in_language: 1,
          })
          .toArray((err, data) => {
            clearTimeout(timeout);
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
      });
    };

    const data = await fetchDataWithTimeout(20000); // 20 seconds timeout

    console.log("Data fetched successfully at:", new Date().toISOString());

    // Update cache with new data
    cachedData = data;
    cacheExpiry = Date.now() + 3 * 24 * 60 * 60 * 1000; // Cache for 3 days

    const jsonData = JSON.stringify(data);
    const compressedData = zlib.gzipSync(jsonData);

    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Length", compressedData.length);
    res.setHeader("Cache-Control", "max-age=259200"); // Cache for 3 days

    res.status(200).end(compressedData);
  } catch (error) {
    console.error("Error in handler:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: error.message });
  } finally {
    if (client) {
      await client.close();
      client = null;
    }
  }
}
