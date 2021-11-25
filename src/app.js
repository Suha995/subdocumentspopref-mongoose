import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import * as BooksController from './controllers/books.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = process.env.PORT || 3047;
const staticDirectory = path.join(__dirname, './public');
mongoose.connect(process.env.MONGODB_URI);
 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(staticDirectory));



app.get('/', async (req, res) => {
    const books = await BooksController.getAllBooks();
res.render('index', {
    pageTitle: "Tech Bookstore",
    books
});
});



app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});