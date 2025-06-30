const range = document.querySelector('.input');
const span = document.querySelector('.span');

function updateSpan() {
  const rangeRect = range.getBoundingClientRect();
  const min = parseInt(range.min || 0);
  const max = parseInt(range.max || 99);
  const value = parseInt(range.value);

  const percent = (value - min) / (max - min);
  const rangeWidth = range.offsetWidth;

  const left = range.offsetLeft + percent * rangeWidth;
  span.style.left = `${left}px`;
  span.textContent = value;
}

range.addEventListener('input', updateSpan);


window.addEventListener('load', updateSpan);
