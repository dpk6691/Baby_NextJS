import mysql from "mysql2/promise";
import zlib from "zlib";

export default async function handler(req, res) {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const [rows] = await db.query(
      "SELECT gender, culture, name, language, meaning_of_name, meaning_in_language FROM `india` WHERE 1"
    );

    // Convert data to JSON string
    const jsonData = JSON.stringify(rows);

    // Compress data using gzip
    const compressedData = zlib.gzipSync(jsonData);

    // Set response headers to indicate gzip compression
    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Length", compressedData.length);

    // Send compressed data as response
    res.status(200).end(compressedData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  } finally {
    await db.end();
  }
}
