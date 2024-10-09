import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
    bookTitle: {
        type: String,
        required: true,
    },
    auther:String,
    copyNum:Number,
    publishDate:String,
    onlineCopy:Boolean,
    price:Number,
    language:String,
    catagory:String,
},
    { timestamps: true }
);

const Book = mongoose.model("book", bookSchema)

export default Book;