import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

//test

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase
      .from("India")
      .select(
        "gender, culture, name, language, meaning_of_name, meaning_in_language"
      );
    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
