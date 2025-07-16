const login = document.querySelector('.login');
const register = document.querySelector('.register');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.signup-form');


register.addEventListener('click', () => {
  loginForm.classList.add('no-show');
  registerForm.classList.add('active');
});

login.addEventListener('click', () => {
  registerForm.classList.remove('active');
  loginForm.classList.remove('no-show');
});