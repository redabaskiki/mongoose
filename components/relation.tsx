// Define the Author schema
const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create the Author model
const Author = mongoose.model("Author", authorSchema);

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: String,
});

// Create the Book model
const Book = mongoose.model("Book", bookSchema);
 const authorSchema = new mongoose.Schema({
   name: String,
   age: Number,
 });

 const Author = mongoose.model("Author", authorSchema);

 const bookSchema = new mongoose.Schema({
   title: String,
   // here we reference the 'author' model in our 'book' schema
   author: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Author",
   },
 });

 const Book = mongoose.model("Book", bookSchema);


 // Create an Author document
const author = await Author.create({
  name: 'J.K. Rowling',
  age: 55
});

// Create a Book document with a reference to the Author
const book = await Book.create({
  title: 'Harry Potter and the Philosopher\'s Stone',
  // passing in the id from the previously created author creates a reference
  author: author._id
});

// Create an Author document
const author = await Author.create({
  name: 'J.K. Rowling',
  age: 55
});

// Create a Book document with a reference to the Author
const book = await Book.create({
  title: 'Harry Potter and the Philosopher\'s Stone',
  // passing in the id from the previously created author creates a reference
  author: author._id
});

Populating a Reference
When you query a document with a reference, the reference will be stored as an ObjectId. If you want to get the actual document that the reference points to, you can use the populate method.

Querying a book
// Query the Book without populating the author
const book = await Book.findById('bookId');

console.log(book);
copy icon
Output without populate
{
  _id: 'bookId',
  title: 'Harry Potter and the Philosopher\'s Stone',
  author: new ObjectId('authorId')
}