let grayHeart = document.querySelector(".gray-heart");
let redHeart = document.querySelector(".red-heart");

grayHeart.addEventListener("click", function () {
  redHeart.classList.add("animate");
 grayHeart.classList.add("fill-color");
});

redHeart.addEventListener("click", function () {
  redHeart.classList.remove("animate");
  grayHeart.classList.remove("fill-color");
});