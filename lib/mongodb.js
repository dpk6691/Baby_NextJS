import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  if (!client.isConnected()) await client.connect();
  const db = client.db("BabyNames");
  return { client, db };
}

export { connectToDatabase };
