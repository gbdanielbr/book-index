const readline = require('readline-sync')
const books = require('./database')

// books by category? input

const searchYesOrNo = readline.question('Search by category? Y/N ')

if (searchYesOrNo.toLocaleUpperCase() === 'Y') {


  const distinctCategories = books
    .filter((book, index) => books
      .findIndex(firstBook => firstBook.category === book.category) === index)
    .map(book => book.category)

  const sortedCategories = distinctCategories.sort()

  console.log(`\nAvailable categories: `)

  let i = 0
  while (i < sortedCategories.length){
    console.log(`  ` + sortedCategories[i])
    i++
  }
}