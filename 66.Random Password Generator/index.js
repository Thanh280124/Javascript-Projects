const input = document.querySelector('.input');
const generateBtn = document.querySelector('.generate');
const copyBtn = document.querySelector('.copy');

generateBtn.addEventListener('click', () => {
  const length = 12;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  input.value = password;
});

copyBtn.addEventListener('click', () => {
  input.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});