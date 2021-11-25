import BooksModel from '../models/books.js';
 
export const getAllBooks = async () => {
    const books = await BooksModel.find({})
        .populate("author")
        .populate("customers").populate({path: "comments", populate: { path: "author", model: "Person"}});
    
    return books;
}