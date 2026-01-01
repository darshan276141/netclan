import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Insight from "./src/models/Insight.js";

dotenv.config();

// Resolve path to jsondata.json (root folder)
const __dirname = new URL('.', import.meta.url).pathname;
const dataPath = path.join(__dirname, "../jsondata.json");

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for Import");

    const rawData = fs.readFileSync(dataPath, "utf-8");
    const jsonData = JSON.parse(rawData);

    await Insight.deleteMany(); // clean import
    await Insight.insertMany(jsonData);

    console.log(`✅ Imported ${jsonData.length} records successfully`);
    process.exit();
  } catch (error) {
    console.error("❌ Import failed:", error);
    process.exit(1);
  }
};

importData();
