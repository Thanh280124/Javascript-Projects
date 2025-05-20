let indicator = document.querySelector(".scroll-indicator-bar");
let scrollHeight = document.body.scrollHeight - document.documentElement.clientHeight;


window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    
    let scrollPercent = (scrollTop / scrollHeight) * 100;
   
    indicator.style.width = `${scrollPercent}%`;
});