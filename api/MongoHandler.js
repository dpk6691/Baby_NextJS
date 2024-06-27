import { connectToDatabase } from "../lib/mongodb";

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("India");
    const documents = await collection.find({}).toArray();
    res.status(200).json({ documents });
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ error: error.message });
  }
}
