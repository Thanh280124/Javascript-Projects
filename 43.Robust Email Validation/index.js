const valid = document.querySelector('#valid');
const invalid = document.querySelector('#invalid');
const emailInput = document.querySelector('#emailInput');




emailInput.addEventListener('keydown', () => {
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.match(emailPattern)) {
    valid.style.display = 'block';
    invalid.style.display = 'none';
  } else {
    valid.style.display = 'none';
    invalid.style.display = 'block';
  }
});