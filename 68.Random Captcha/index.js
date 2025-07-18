const captcha = document.querySelector('.captcha');
const result = document.querySelector('.check');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
const input = document.querySelector('.input');


function generateCaptcha() {
   const length = 7;
   let password = '';
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

icon.addEventListener('click', () => {
  const captchaText = generateCaptcha();
  captcha.textContent = captchaText;
  input.value = '';
  result.textContent = '';
});


btn.addEventListener('click', () => {
  const value = input.value;
  const captchaText = captcha.textContent;
  if (value === captchaText) {
    result.textContent = 'Captcha is correct!';
    result.style.color = 'green';
  } else {
    result.textContent = 'Captcha is incorrect!';
    result.style.color = 'red';
  }
});