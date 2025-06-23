const nav = document.querySelector('.navbar');
const a = document.querySelectorAll('.a');
window.addEventListener('scroll', () =>{
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
        a.forEach((link) => {
            link.style.color = 'black';
        });
    }else{
        nav.classList.remove('active');
        a.forEach((link) => {
            link.style.color = 'white';
        });
    }
})

console.log(nav.offsetHeight);
