const img = document.querySelector("img");
const btns = document.querySelectorAll(".btn");
console.log(img, btns);


btns.forEach((btn,index) => {
  btn.addEventListener("click", (e) => {
   img.src = `pic${index + 1}.jpg`;
   animation();
   btn.classList.add('select')
  });
});

function animation() {
  img.classList.add("zoom");

  setTimeout(() => {
    img.classList.remove("zoom");
  }, 1000);

  for (b of btns) {
    b.classList.remove("select");
  }
}