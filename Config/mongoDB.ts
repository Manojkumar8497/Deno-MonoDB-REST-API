import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

// MongoDB Local URL
const mongoUri = "mongodb://localhost:27017";
// DB name
const DB_name = "Products";

// Setting up our MongoClient
const client = new MongoClient();
client.connectWithUri(mongoUri);

// Creating our database
const db = client.database(DB_name);

export default db;