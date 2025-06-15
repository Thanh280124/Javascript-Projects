const images = document.querySelectorAll('.img img');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlayImg');
const closeBtn = document.getElementById('closeBtn');
const imgContainer = document.querySelector('.img');

images.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.style.display = 'flex';
    imgContainer.classList.add('no-hover');
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  imgContainer.classList.remove('no-hover');
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  imgContainer.classList.remove('no-hover');
});
