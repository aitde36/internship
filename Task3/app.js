const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // For parsing application/json

// In-memory array to store books
let books = [
    { id: 1, title: 'Java-script', author: 'xyz' },
    { id: 2, title: 'Physics', author: 'H.C verma' }
];

// 1. GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// 2. POST a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    const newBook = { id, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// 3. PUT - update a book by ID
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }

    books[bookIndex] = { id, title, author };
    res.json(books[bookIndex]);
});

// 4. DELETE a book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }

    const removedBook = books.splice(bookIndex, 1);
    res.json(removedBook[0]);
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});