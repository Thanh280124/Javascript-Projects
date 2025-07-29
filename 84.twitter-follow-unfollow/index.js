const toggle = document.querySelector(".toggle");
const contianer = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "Follow") {
      btn.textContent = "Unfollow";
      btn.classList.add("unfollow");
    } else {
      btn.textContent = "Follow";
      btn.classList.remove("unfollow");
    }
  });
});

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  contianer.classList.toggle("background-toggle");
  document.body.classList.toggle('background-toggle')
});