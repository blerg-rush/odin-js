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
  const bookCard = document.createElement('div')
  bookCard.className = 'bookCard book-bookCard mx-2 mb-2'

  const cardBody = document.createElement('div')
  cardBody.className = 'bookCard-body'

  const title = document.createElement('h5')
  title.className = 'bookCard-title'
  title.innerText = book.title

  const author = document.createElement('h6')
  author.className = 'bookCard-subtitle mb-2 text-muted'
  author.innerText = book.author

  const pages = document.createElement('p')
  pages.className = 'bookCard-text'
  pages.innerText = `pages: ${book.pages}`

  const read = document.createElement('p')
  read.clasName = 'bookCard-text'
  read.innerText = `read: ${book.read ? 'yes' : 'no'}`

  const removeButton = document.createElement('button')
  removeButton.type = 'button'
  removeButton.className = 'btn btn-sm btn-danger mb-1'
  removeButton.innerText = 'Remove'
  removeButton.dataset.id = myLibrary.indexOf(book)

  const readButton = document.createElement('button')
  readButton.type = 'button'
  readButton.className = 'btn btn-sm btn-info'
  readButton.innerText = 'Toggle read'
  readButton.dataset.id = myLibrary.indexOf(book)

  cardBody.appendChild(title)
  cardBody.appendChild(author)
  cardBody.appendChild(pages)
  cardBody.appendChild(read)
  cardBody.appendChild(removeButton)
  cardBody.appendChild(readButton)
  bookCard.appendChild(cardBody)

  removeButton.onclick = function () {
    removeBook(this.dataset.id, 1)
  }

  readButton.onclick = function () {
    toggleRead(this.dataset.id)
  }

  return bookCard
}

function render (library) {
  const booksList = document.querySelector('.books')
  library.forEach(book => {
    booksList.appendChild(createBookCard(book))
  })
}

function clear () {
  const booklist = document.querySelector('.books')
  while (booklist.firstChild) {
    booklist.removeChild(booklist.firstChild)
  }
}

function refresh (library) {
  clear()
  render(library)
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

const bookForm = document.querySelector('#book-form')
const bookTitle = document.querySelector('#book-title')
const bookAuthor = document.querySelector('#book-author')
const bookPages = document.querySelector('#book-pages')
const bookRead = document.querySelector('#book-read')

bookForm.onsubmit = function (event) {
  event.preventDefault()

  const newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    Number.parseInt(bookPages.value),
    bookRead.checked
  )
  addBookToLibrary(newBook)
  refresh(myLibrary)
  bookForm.reset()
}

function removeBook (index) {
  myLibrary.splice(index)
  refresh(myLibrary)
}

function toggleRead (index) {
  myLibrary[index].read
    ? myLibrary[index].read = false
    : myLibrary[index].read = true
  refresh(myLibrary)
}
