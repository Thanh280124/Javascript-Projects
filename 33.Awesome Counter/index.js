let input = document.querySelector('.value');
let text = document.querySelector('.text');
let increament = document.querySelector('.increament');
let save = document.querySelector('.save');

increament.addEventListener('click', () => {
    let currentValue = Number(input.value) || 0;
    input.value = currentValue + 1;
});

save.addEventListener('click', () => {
    let currentValue = Number(input.value) || 0;
    text.innerHTML += currentValue + ' , ';
    input.value = 0; 
});
