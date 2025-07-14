const body = document.body
const imgs = document.querySelectorAll('.img');
const arrowBtns = document.querySelectorAll('.arrow-btn')

let activeImg = 0 ;

function activeImage(){
  imgs.forEach(img => {
    img.classList.remove('active')
    img.classList.remove('animation')
  })
  imgs[activeImage].classList.add('active');
  imgs[activeImage].classList.add('animation');
}

setImgage()

function setImgage(){
  body.style.backgroundImage = imgs[activeImg].style.backgroundImage
}

arrowBtns.forEach(btn =>{
  btn.addEventListener('click', () =>{
    if(btn.classList == 'right-arrow'){
      activeImg++
      if(activeImg > imgs.length - 1){
        activeImg = 0
      }
    }else{
      activeImg--;
      if(activeImg < 0){
        activeImg = imgs.length - 1
      }
    }
    setImgage()
    activeImage()
  })
})