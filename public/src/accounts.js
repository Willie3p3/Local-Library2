function findAccountById(accounts, id) {
  //loop through the array
  //if the ID matches the account, it is true
  //else if the ID does not match, it is false
  //return the account that matches  
  /*for(const account of accounts){
   if(account.id === id){
     return account;
   }
  }*/
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.localeCompare(b.name.last));
  //takes an array of account objects
  //objects are sorted alphabetically by their last names
  // returns a sorted array of the same objects
  //localeCompare() method takes two strings as its input and returns an integer value that indicates whether the first string is less than, equal to, or greater than the second string
}

function getTotalNumberOfBorrows(account, books) {
 const accountId = account.id;
 const borrows = books.filter(book => book.borrows.some(borrow => borrow.id === accountId));
 return borrows.length;
  //first get the ID of the account that is being checked
  //create a new array of all the books that have been borrowed by that account
  //filter is used to determine which elements of the array should be included in the new array
  //When the array of borrowed books has been created, the function simply returns the length of the array
}


function getBooksPossessedByAccount(account, books, authors) {
  // Initialize a return array.
  const booksPossessed = [];
  // Check for the account id in the borrows arrays.
  books.forEach((book) => {
    const borrowArray = book.borrows;
    if (borrowArray.find((borrow) => borrow.id === account.id && borrow.returned === false)) {
      booksPossessed.push(book);
    }
  });
  // Iterate over the booksPossessed array and add the author information to each book object.
  booksPossessed.forEach((book) => {
    const author = authors.find((person) => person.id === book.authorId);
    book['author'] = author;
  });
  // Return the booksPossessed array.
  return booksPossessed;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
