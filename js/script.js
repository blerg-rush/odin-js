const myLibrary = []

function Book (title, author, pages, read = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function () {
  return `${this.title} \
          by ${this.author}, \
          ${this.pages} pages, \
          ${this.read ? 'already read' : 'not read yet'}`
}

function addBookToLibrary (book) {
  myLibrary.push(book)
}

function createBookCard (book) {
  const card = document.createElement('div')
  card.className = 'card'

  const cardBody = document.createElement('div')
  cardBody.className = 'card-body'

  const title = document.createElement('h5')
  title.className = 'card-title'
  title.innerText = book.title

  const author = document.createElement('h6')
  author.className = 'card-subtitle mb-2 text-muted'
  author.innerText = book.author

  const pages = document.createElement('p')
  pages.className = 'card-text'
  pages.innerText = `pages: ${book.pages}`

  const read = document.createElement('p')
  read.clasName = 'card-text'
  read.innerText = `read: ${read ? 'yes' : 'no'}`

  cardBody.appendChild(title)
  cardBody.appendChild(author)
  cardBody.appendChild(pages)
  cardBody.appendChild(read)
  card.appendChild(cardBody)
  return card
}

function render (library) {
  const booksList = document.querySelector('.books')
  library.forEach(book => {
    booksList.appendChild(createBookCard(book))
  })
}

const nameOfTheWind = new Book('The Name of the Wind', 'Patrick Rothfuss', 662, true)
const wiseMansFear = new Book("The Wise Man's Fear", 'Patrick Rothfuss', 994, true)
const neverwhere = new Book('Neverwhere', 'Neil Gaiman', 400, true)
const doomsdayBook = new Book('Doomsday Book', 'Connie Willis', 592, true)
const toSayNothingOfTheDog = new Book('To Say Nothing of the Dog', 'Connie Willis', 434, true)
const blackoutAllClear = new Book('Blackout/All Clear', 'Connie Willis', 1168, true)
const anathem = new Book('Anathem', 'Neal Stephenson', 937, false)

addBookToLibrary(nameOfTheWind)
addBookToLibrary(wiseMansFear)
addBookToLibrary(neverwhere)
addBookToLibrary(doomsdayBook)
addBookToLibrary(toSayNothingOfTheDog)
addBookToLibrary(blackoutAllClear)
addBookToLibrary(anathem)

render(myLibrary)
