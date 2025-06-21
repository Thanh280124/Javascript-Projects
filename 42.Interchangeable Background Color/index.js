const container = document.querySelector('.container');
const btn = document.querySelectorAll('.container button');

btn.forEach(button => {
  button.addEventListener('click', (e) => {
    const color = e.target.classList;
     container.style.backgroundColor = color;
  });
});