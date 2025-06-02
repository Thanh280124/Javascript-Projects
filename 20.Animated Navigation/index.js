const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const nav = document.getElementById('nav')
closeBtn.addEventListener('click',() =>{
  nav.classList.remove('active')
  closeBtn.classList.add('active2')
  openBtn.classList.add('active1')
})

openBtn.addEventListener('click',() =>{
    openBtn.classList.remove('active1')
    nav.classList.add('active')
  closeBtn.classList.remove('active2')
})