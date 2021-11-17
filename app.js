const readline = require('readline-sync')
const books = require('./database')

// books by category? input

const searchYesOrNo = readline.question('Search by category? Y/N ')

if (searchYesOrNo.toLocaleUpperCase() === 'Y') {

  // printing the available categories without repeating logic
  const distinctCategories = books
    .filter((book, index) => books
      .findIndex(firstBook => firstBook.category === book.category) === index)
    .map(book => book.category)

  const sortedCategories = distinctCategories.sort()

  console.log(`\nAvailable categories: `)
  console.table(sortedCategories)

  // witch category input and print selected category logic
  const choice = readline.question(`\nPlease write the chosen category: `)
  console.table(books.filter(book => book.category.toLowerCase() === choice.toLowerCase()))
} else {
  // printing all books in order of page number
  console.log('\nEstes são todos os livros disponíveis')
  console.table(books.sort((a,b) => a.pages - b.pages))
}