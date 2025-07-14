const show = document.querySelector('.show');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{

  const color1= '#' + makeColor()
  const color2= '#' + makeColor()
  box1.style.backgroundColor = color1
 box2.style.backgroundColor = color2
 show.style.backgroundImage = `linear-gradient(${color1},${color2})`;
})

function makeColor(){
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor
}