import mongoose from "mongoose";

const bookScheme = mongoose.Schema({
  name: String,
  title: String,
  category: String,
  price: Number,
  Image: String,
});

const Book = mongoose.model("Book", bookScheme);
export default Book;
