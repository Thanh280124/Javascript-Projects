const p = document.querySelector('.p');
const search = document.querySelector('.search');

search.addEventListener('click', () => {
  let input = document.querySelector('.search-input').value;
  if(input !== '') {
    let regex = new RegExp(input, 'gi');
    p.innerHTML = p.textContent.replace(regex, (match) => `<mark>${match}</mark>`);

  }
});