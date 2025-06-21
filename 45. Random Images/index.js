const btn = document.querySelector('.btn'); // Your "Get Quotes" button
const container = document.querySelector('.container');
const IMAGE_COUNT = 30;
window.addEventListener('load', () => {
    load30Images();
});

function loadOneRandomImage() {
 fetch('https://api.api-ninjas.com/v1/randomimage', {
    method: 'GET',
    headers: {
      'X-Api-Key':'9FXd4pmpbGuYN4leULxGJQ==uAAuiOCofdea55ZG',
      'Accept': 'image/jpg'
    }
  })
  .then(response => response.blob()) 
  .then(imageBlob => {
    const imageUrl = URL.createObjectURL(imageBlob);
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Image';
    img.style.maxWidth = '500px';
    img.style.marginTop = '20px';

    container.appendChild(img);
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });
}


function load30Images() {
  container.innerHTML = ''; 
  for (let i = 0; i < IMAGE_COUNT; i++) {
    loadOneRandomImage();
  }
}