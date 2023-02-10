var booksArray = [
  {
    isbn: '235 - 1393',
    title: 'Harry Potter, and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    isbn: '256-1678',
    title: 'Lone Survivor',
    author: 'Marcus Luttrell'
  },
  {
    isbn: '557-9832',
    title: '1984',
    author: 'George Orwell'
  }
];
console.log('booksArray:', booksArray);
console.log('typeOfBooksArray', typeof booksArray);

var stringifiedArray = JSON.stringify(booksArray);
console.log('stringified array', stringifiedArray);
console.log('typeofstringifiedarray', typeof stringifiedArray);

var stringJSON = '{ "number id": "15433", "name": "Bishan" }';
console.log('stringJSON', stringJSON);
console.log('typeOf stringJSON', typeof stringJSON);

var parsedJSON = JSON.parse(stringJSON);
console.log(parsedJSON);
