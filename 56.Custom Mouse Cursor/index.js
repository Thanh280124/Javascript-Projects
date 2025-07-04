let inner = document.querySelector('.inner')
let outer = document.querySelector('.outer')


document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY;

  inner.style.left = `${x}px`
  inner.style.top = `${y}px`
  outer.style.left = `${x}px`
  outer.style.top = `${y}px`
}