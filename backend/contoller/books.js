const Book = require('../model/books')

const getAllBooks = async(req,res)=>{
    try {
        const Books= await Book.find();
        res.json(Books);
    } catch (error) {
        res.status(500).json({error : 'Server Error'});
    }
}

const getSingleBook = async (req,res) =>{
    const bookId = req.params.bookId;
    try {
        const book = await Book.findbyId(bookId);
        if(!bookId){
            return status(404).json({error : 'Product Not Found'})
        }
        res.json(book);
        
    } catch (error) {
        res.status(500).json({error : "server Error"})
    }
}

const createBook = async(req,res)=>{
    try {
        const book = await Book.create(req.body);
        res.json(book)
    } catch (error) {
        res.status(400).json({error : "Invalid Request"})
    }
}


module.exports = {createBook,getAllBooks,getSingleBook};