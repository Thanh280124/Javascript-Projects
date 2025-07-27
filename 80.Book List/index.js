const bookTitleInput = document.getElementById("bookTitle");
const bookAuthorInput = document.getElementById("author");
const bookYearInput = document.getElementById("publishedYear");
const bookList = document.getElementById("bookList");
const addBookButton = document.getElementById("addBook");


window.addEventListener("DOMContentLoaded", function () {
  const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
  savedBooks.forEach(book => addBookToTable(book));
});

addBookButton.addEventListener("click", function (e) {
  e.preventDefault();

  const title = bookTitleInput.value.trim();
  const author = bookAuthorInput.value.trim();
  const year = bookYearInput.value.trim();

  if (title === "" || author === "" || year === "") {
    alert("Please fill in all fields.");
    return;
  }

  const newBook = { title, author, year };


  addBookToTable(newBook);

  
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));


  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookYearInput.value = "";
});

// Helper function to add a row to the table
function addBookToTable(book) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td class='result'>${book.title}</td>
    <td class='result'>${book.author}</td>
    <td class='result'>${book.year}</td>
  `;

  bookList.appendChild(row);
}
