import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const mongoApiKey = process.env.MONGO_API_KEY;
const mongoApiUrl = process.env.MONGO_API_URL;
const database = process.env.MONGO_DB_NAME;
const collection = "India";

if (!mongoApiKey || !mongoApiUrl || !database) {
  throw new Error("Missing MongoDB API key, URL, or Database Name");
}

export default async function handler(req, res) {
  try {
    // Fetch data from MongoDB Atlas Data API with a timeout
    const fetchDataWithTimeout = async (timeoutMs) => {
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(
          () => reject(new Error("Request timed out")),
          timeoutMs
        );

        const data = JSON.stringify({
          collection: collection,
          database: database,
          dataSource: "BabyNameIndia",
          projection: {
            gender: 10000,
            culture: 10000,
            name: 10000,
            language: 10000,
            meaning_of_name: 10000,
            meaning_in_language: 10000,
          },
        });

        const config = {
          method: "post",
          url: mongoApiUrl,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key": mongoApiKey,
            Accept: "application/ejson",
          },
          data: data,
        };

        axios(config)
          .then((response) => {
            console.log("API Response:", response.data); // Log the API response
            clearTimeout(timeout);
            if (response.data.document) {
              resolve(response.data.document); // Access the document object
            } else {
              reject(new Error("No document found"));
            }
          })
          .catch((error) => {
            clearTimeout(timeout);
            reject(error);
          });
      });
    };

    const data = await fetchDataWithTimeout(30000); // 30 seconds timeout

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in handler:", error.message, error.stack);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: error.message });
  }
}
