import mongoose from "mongoose";
import PersonsModel from "./persons.js"; //we need that because we use person as ref
import CommentsModel from "./comments.js";

const Schema = mongoose.Schema;

const booksSchema = mongoose.Schema(
  {
    title: String,
    author: { type: Schema.ObjectId, ref: "Person" },
    url: String,
    customers: [{ type: Schema.ObjectId, ref: "Person" }],
    isbn: String,
    comments: [{ type: Schema.ObjectId, ref: "Comment" }],
  },
  { collection: "books" }
);
const BooksModel = mongoose.model("Book", booksSchema);

export default BooksModel;
