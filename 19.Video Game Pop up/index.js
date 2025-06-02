const btn = document.querySelector('.btn');
const videoCon = document.querySelector('.video-con')
const btnClose = document.querySelector('.icon');
const video = document.querySelector('video')
btn.addEventListener('click', () =>{
    videoCon.classList.remove('active');
    video.play()
})

btnClose.addEventListener('click', () =>{
    videoCon.classList.add('active');
    video.pause()
    video.currentTime = 0;
})