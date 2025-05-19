const bodyElement = document.querySelector('body');


bodyElement.addEventListener('mousemove', (event) => {
const offsetX = event.offsetX;
const offsetY = event.offsetY;

const spanE = document.createElement('span');
spanE.style.left = `${offsetX}px`;
spanE.style.top = `${offsetY}px`;
bodyElement.appendChild(spanE);
const size = Math.random() * 100;
spanE.style.width = `${size}px`;
spanE.style.height = `${size}px`;
setTimeout(() => {
  spanE.remove();
},3000)
})