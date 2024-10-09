
import express from "express"
import mongoose from "mongoose"
import Book from "./models/Book.js"
import dotenv from 'dotenv'
const app = express()
const port = 4000
app.use(express.json())

dotenv.config()


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("data base connect")
}


app.post('/book', (req, res) => {
    const book = new Book({
        bookTitle: req.body.bookTitle,
        auther: req.body.auther,
        copyNum: req.body.copyNum,
        publishDate: req.body.publishDate,
        onlineCopy: req.body.onlineCopy,
        price: req.body.price,
        language: req.body.language,
        catagory: req.body.catagory,

    })
    book.save()

        .then((result) => {
            res.send(result);
        })
})

app.get('/book', (req, res) => {
    Book.find()
        .then(result => {
            res.send(result)
        }).catch(() => {
            res.send("error")
        })
})

app.get('/bookone/:name', (req, res) => {
    const { name } = req.params

    Book.findOne({auther: name })
        .then(result => {
            res.send(result)
        }).catch(() => {
            res.send("error")
        })
})

app.patch('/book/:id', (req, res) => {
    const { id } = req.params
    Book.findByIdAndUpdate(id, req.body, { new: true, })
        .then(respone => res.json())

})




app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})