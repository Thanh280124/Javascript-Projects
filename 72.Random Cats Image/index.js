const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('.btn');
const img = document.querySelector('.img');

btn.addEventListener('click', () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      img.src = data[0].url;
      img.alt = 'Random Cat Image';
    })
    .catch(error => console.error('Error fetching the cat image:', error));
});
