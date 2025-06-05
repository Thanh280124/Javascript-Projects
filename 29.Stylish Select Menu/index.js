const arrow = document.querySelector('.arrow');
const list = document.getElementById('list');
const options = document.querySelectorAll('.options')
const nameField = document.querySelector('.name');
arrow.addEventListener('click', () =>{
    list.classList.toggle('hide');
    arrow.classList.toggle('rotate')
})

options.forEach((option)=>{
  option.addEventListener('click',(e)=>{
 nameField.innerHTML = e.target.innerText
 list.classList.toggle('hide');
    arrow.classList.toggle('rotate')
  })
})