const btn = document.querySelector('.btn');
const decimalInput = document.querySelector('.decimal');
const resultSpan = document.querySelector('.result');


btn.addEventListener('click', () => {
  const decimalValue = parseInt(decimalInput.value, 10);
  
  if (isNaN(decimalValue)) {
    resultSpan.textContent = 'Please enter a valid decimal number';
    return;
  }

  const binaryValue = decimalValue.toString(2);

  const span = document.createElement('span');
  span.textContent = `${binaryValue}`;
  resultSpan.append(span);
});
