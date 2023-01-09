import { MongoClient, Db } from "mongodb";

export let db: Db;

export async function connectToMongodb(): Promise<void> {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("Connection mongodb URI is not found");
    }

    const client: MongoClient = new MongoClient(process.env.MONGO_URI);

    await client.connect();

    db = client.db();

    console.log(
      `Successfully connected to mongodb database: ${db.databaseName}`
    );
  } catch (e) {
    console.log("Connection to mongodb failed:", e);
    process.exit(1);
  }
}
