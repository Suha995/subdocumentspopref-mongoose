import mongoose from 'mongoose';
import PersonsModel from './persons.js';

const Schema = mongoose.Schema;

const commentsSchema = mongoose.Schema(
    {
        message: String,
        datetime: String,
        author: { type: Schema.ObjectId, ref: "Person" }
    },
    {
        collection: "comments"
    }
);

const CommentsModel = mongoose.model('Comment', commentsSchema);

export default CommentsModel;
