function findAuthorById(authors, id) {
  // Loop through the authors array
  for (const author of authors) {
    // If the author's ID matches the ID passed to the function
    if (author.id === id) {
      // Return the author object
      return author;
    }
  }
}

function findBookById(books, id) {
  // Loop through the books array
  for (const book of books) {
    // If the book's ID matches the ID passed to the function, return the book
    if (book.id === id) {
      return book;
    }
  }
}


function partitionBooksByBorrowedStatus(books) {
  // Create two empty arrays to store the checked out and returned books.
  const checkedOutBooks = [];
  const returnedBooks = [];
  // Iterate over the books array and add each book to the appropriate array.
  books.forEach((book) => {
    // Check if the book has been checked out.
    if (book.borrows[0].returned === false) {
      // If the book has been checked out, add it to the checked out books array.
      checkedOutBooks.push(book);
    } else {
      // If the book has been returned, add it to the returned books array.
      returnedBooks.push(book);
    }
  });
  // Return an array with the checked out and returned books arrays.
  return [checkedOutBooks, returnedBooks];
}
 

function getBorrowersForBook(book, accounts) { 
  const borrows = book.borrows; //get borrows array 
  let borrowers = []; //create empty aray, storring borrowers
  for(const borrow of borrows){ //going through each item inside the array
    const account = accounts.find(account => account.id === borrow.id); 
    //use find to find the account object with matching ID
    if(account){
   account.returned = borrow.returned
    borrowers.push(account)
  }
  }
  borrowers = borrowers.slice(0, 10);
 return borrowers;
}
  
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
