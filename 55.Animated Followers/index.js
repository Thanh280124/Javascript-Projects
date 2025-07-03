const nums = document.querySelectorAll('.nums');

window.addEventListener('load', () => {
  nums.forEach((el) => {
    animateCount(el);
  });
});

function animateCount(el) {
  const target = parseInt(el.textContent);
  let current = 0;

  function update() {
    if (current < target) {
      current += Math.ceil(target / 100); 
      if (current > target) current = target;
      el.textContent = current;
      setTimeout(update, 1);
    }
  }

  update();
}
