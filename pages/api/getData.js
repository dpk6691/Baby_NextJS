import { createClient } from "@supabase/supabase-js";
import zlib from "zlib";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

let cachedData; // Variable to store cached data
let cacheExpiry = 0; // Variable to store cache expiry time

export default async function handler(req, res) {
  try {
    // Check if cached data is still valid
    if (cachedData && Date.now() < cacheExpiry) {
      // Serve data from cache
      const compressedData = zlib.gzipSync(JSON.stringify(cachedData));
      res.setHeader("Content-Encoding", "gzip");
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Content-Length", compressedData.length);
      res.setHeader("Cache-Control", "max-age=259200"); // Cache for 3 days
      res.status(200).end(compressedData);
      return;
    }

    // Fetch data from Supabase with a timeout
    const fetchDataWithTimeout = new Promise((resolve, reject) => {
      const timeout = setTimeout(
        () => reject(new Error("Request timed out")),
        10000
      ); // 10 seconds timeout

      supabase
        .from("India")
        .select(
          "gender, culture, name, language, meaning_of_name, meaning_in_language"
        )
        .then(({ data, error }) => {
          clearTimeout(timeout);
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
    });

    const data = await fetchDataWithTimeout;

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
  }
}
