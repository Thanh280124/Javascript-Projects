const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
const close = document.querySelector('.close');
const container = document.querySelector('.content');
btn.addEventListener('click',() =>{
    form.classList.add('active');
    container.classList.add('blur')

})

close.addEventListener('click',() =>{
    form.classList.remove('active')
    container.classList.remove('blur')
})

