const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
  fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const joke = data.joke;
      document.querySelector('.jokes').innerText = joke;
    })
    .catch((error) => {
      console.error('Error fetching joke:', error);
    });
  
});
