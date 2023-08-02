function getTotalBooksCount(books) {
  // Get the length of the array.
  const length = books.length;
  // Return the number of books.
  return length;
}


function getTotalAccountsCount(accounts) {
  return accounts.filter(account => account).length;
  //.filter() method takes a predicate function as an argument and returns a new array containing only the elements of the original array
  //the function will return true for all elements of the array
  //.length of an array returns the number of elements in the array
  //.filter() and .length together return the number of account objects in the array
}


function getBooksBorrowedCount(books) {
  return books.map(book => {
    const firstTransaction = book.borrows[0];
    return firstTransaction.returned ? 0 : 1;
  }).reduce((a, b) => a + b);
}


function getMostCommonGenres(books) {
  // Create an object to store the genre counts.
  const genreCounts = {};

  // Iterate over the books and increment the count for each genre.
  books.forEach((book) => {
    if (genreCounts[book.genre] === undefined) {
      genreCounts[book.genre] = 1;
    } else {
      genreCounts[book.genre]++;
    }
  });

  // Create an array to store the most common genres.
  const mostCommonGenres = [];

  // Iterate over the genre counts and add the top five genres to the array.
  Object.entries(genreCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).forEach((genre) => {
    mostCommonGenres.push({
      name: genre[0],
      count: genre[1],
    });
  });

  // Return the array of most common genres.
  return mostCommonGenres;
}


function getMostPopularBooks(books) {
  // Create an empty array to store the most popular books.
  const mostPopularBooks = [];
  // Loop through the books array.
  for (const book of books) {
    // Get the number of times the book has been borrowed.
    const borrowCount = book.borrows.length;
console.log(borrowCount)
    // If the book is one of the most popular books, add it to the array.
    if (mostPopularBooks.length < 5 || borrowCount > mostPopularBooks[mostPopularBooks.length - 1].count) {
      mostPopularBooks.push({
        name: book.title,
        count: book.borrows.length,
      });
      mostPopularBooks.sort((a, b) => b.count - a.count);
      // Sort the array by the `count` key.
    }
  }
console.log(mostPopularBooks)
  // Return the first 5 books in the array.
  return mostPopularBooks.slice(0, 5);
}



function getMostPopularAuthors(books, authors) {
  // Create an empty array to store the most popular authors.
  const mostPopularAuthors = [];

  // Iterate over the books array.
  for (const book of books) {
    // Get the author ID of the book.
    const authorId = book.authorId;

    // Find the author object with the matching ID.
    const author = authors.find(author => author.id === authorId);

    // If the author object is found, then...
    if (author) {
      // Get the number of times the author's books have been borrowed.
      const borrowCount = book.borrows.length;
console.log(`${author.name.first} ${author.name.last}`)      // Create an object to store the author's name and borrow count.
      const authorData = {
        name: author.name.first + " " + author.name.last,
        count: borrowCount
      };

      // Add the author data to the array of most popular authors.
      mostPopularAuthors.push(authorData);
    }
  }
console.log(mostPopularAuthors)
  // Sort the array of most popular authors by borrow count in descending order.
  mostPopularAuthors.sort((a, b) => b.count - a.count);

  // Get the first five elements of the sorted array.
  const topAuthors = mostPopularAuthors.slice(0, 5);

  // Return the array of top five authors.
  return topAuthors;
}















module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
