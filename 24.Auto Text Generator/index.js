const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

let words = ['Awesome', 'Good','Bad','Cool','Bored','Famous','interesting',]

const typingDelay = 200
const earsingDelay = 200;

const newLetterDelay = 2000;

let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () =>{
    if(words.length){
        setTimeout(type,newLetterDelay)
    }
})

function type(){
    if(charIndex < words[index].length){
        typedText.textContent += words[index].charAt(charIndex)
        charIndex++
        setTimeout(type, typingDelay)
    }else{
        setTimeout(earse, newLetterDelay)
    }
}

function earse(){
    if(charIndex > 0){
        typedText.textContent = words[index].substring(0,charIndex-1);
        charIndex--
    setTimeout(earse,earsingDelay)
    }else{
        index++
        if(index >= words.length){
            index = 0
        }
        setTimeout(type,typingDelay + 1100)
    }
}
