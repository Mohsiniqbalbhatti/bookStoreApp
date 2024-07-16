import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./router/book.route.js";
import userRoute from "./router/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// conect to mongodb database
try {
  mongoose.connect(URI);
  console.log("connected to mongo DB");
} catch (error) {
  console.log("Error", error);
}

// defining route
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
