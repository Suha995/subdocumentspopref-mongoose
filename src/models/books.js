import mongoose from "mongoose";
import PersonsModel from "../models/persons.js";//we need that because we use person as ref

const Schema = mongoose.Schema;

const booksSchema = mongoose.Schema(
  {
    title: String,
    author: { type: Schema.ObjectId, ref: "Person" },
    url: String,
    customers: [{ type: Schema.ObjectId, ref: "Person" }],
    isbn: String,
  },
  { collection: "books" }
);
const BooksModel = mongoose.model("Book", booksSchema);

export default BooksModel;
