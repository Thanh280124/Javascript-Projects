const bookTitleInput = document.getElementById("bookTitle");
const bookAuthorInput = document.getElementById("author");
const bookYearInput = document.getElementById("publishedYear");
const bookList = document.getElementById("bookList");
const addBookButton = document.getElementById("addBook");

addBookButton.addEventListener("click", function(e) {
  e.preventDefault();
  const title = bookTitleInput.value.trim();
  const author = bookAuthorInput.value.trim();
  const year = bookYearInput.value.trim();

  if (title === "" || author === "" || year === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Create a table row
  const row = document.createElement("tr");

  // Create table data cells
  row.innerHTML = `
    <td class = 'result'>${title}</td>
    <td class = 'result'>${author}</td>
    <td class = 'result'>${year}</td>
  `;

  // Append the row to the table body
  bookList.appendChild(row);

  // Clear inputs
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookYearInput.value = "";
});

