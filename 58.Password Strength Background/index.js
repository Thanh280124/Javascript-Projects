const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const maxBlur = 20;     
  const maxLength = 12;    

  let blurValue = maxBlur - (password.length / maxLength) * maxBlur;
  blurValue = Math.max(0, Math.min(maxBlur, blurValue));

  document.body.style.setProperty('--blur-amount', `${blurValue}px`);
});
