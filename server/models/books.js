/*
    COMP229-MIDTERM-301226808-CymanthaDiesel
    Cymantha Diesel
    301226808
    Midterm - Book List 
*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    timestamps: true,
    collection: 'books'
});

export default mongoose.model('Books', BookSchema);