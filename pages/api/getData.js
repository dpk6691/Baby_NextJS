import { createClient } from "@supabase/supabase-js";
import zlib from "zlib";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase
      .from("India")
      .select(
        "gender, culture, name, language, meaning_of_name, meaning_in_language"
      );

    if (error) throw error;
    const jsonData = JSON.stringify(data);

    const compressedData = zlib.gzipSync(jsonData);

    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Length", compressedData.length);

    res.status(200).end(compressedData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
