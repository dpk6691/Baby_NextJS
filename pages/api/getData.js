import mysql from "mysql2/promise";
import zlib from "zlib";

export default async function handler(req, res) {
  let db;
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await db.query(
      "SELECT gender, culture, name, language, meaning_of_name, meaning_in_language FROM `india` WHERE 1"
    );

    const jsonData = JSON.stringify(rows);
    const compressedData = zlib.gzipSync(jsonData);

    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Length", compressedData.length);

    res.status(200).end(compressedData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    console.error("Error details:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: error.message });
  } finally {
    if (db) {
      await db.end();
    }
  }
}
