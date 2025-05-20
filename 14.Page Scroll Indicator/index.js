let indicator = document.querySelector(".scroll-indicator-bar");
let scrollHeight = document.body.scrollHeight - document.documentElement.clientHeight;
console.log(scrollHeight);

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    
    let scrollPercent = (scrollTop / scrollHeight) * 100;
    console.log(scrollPercent);
    indicator.style.width = `${scrollPercent}%`;
});