const arrow = document.querySelector('.arrow');

window.addEventListener('scroll', () => {
  let position = window.scrollY;

  if (position > 5) {
    arrow.classList.remove('fade-in');
    arrow.classList.add('fade-out');
  } else {
    arrow.classList.remove('fade-out');
    arrow.classList.add('fade-in');
  }
});
