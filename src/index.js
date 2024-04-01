import dotenv from "dotenv";
import connectDB from "./db/index.js";

// import mongoose from "mongoose";
// import express from "express";
// import { DB_NAME } from "./constants";
// const app = express();

// (async () => {
//   const port = process.env.PORT || 8080;
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     application.on("error", (err) => {
//       console.error("ERROR:", err);
//       throw err;
//     });

//     app.listen(port, () => console.log(`listening on port: ${port}`));
//   } catch (err) {
//     console.error("ERROR:", err);
//     throw err;
//   }
// })();
dotenv.config({ path: "./env" });

connectDB();
