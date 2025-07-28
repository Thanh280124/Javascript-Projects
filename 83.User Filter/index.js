const searchInput = document.getElementById("searchInput");
const people = document.querySelectorAll(".person");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  people.forEach(person => {
    const name = person.querySelector("h2").textContent.toLowerCase();
    const location = person.querySelector("p").textContent.toLowerCase();

    if (name.includes(searchTerm) || location.includes(searchTerm)) {
      person.style.display = "flex";
    } else {
      person.style.display = "none";
    }
  });
});
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  document.body.classList.toggle('background-toggle')
});