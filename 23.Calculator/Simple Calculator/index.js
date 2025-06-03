const result = document.querySelector('.result');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const btn = document.querySelector('.btn');
const operator = document.querySelector('.operator');

btn.addEventListener('click',(e) =>{
    let firstValue =Number(num1.value) ;
    let secondValue = Number(num2.value);
    let selectedValue = operator.value;
    let results = 0;
    if(selectedValue == '+'){
        results = firstValue + secondValue
    }else if(selectedValue == '-'){
        results = firstValue - secondValue  
    }else if(selectedValue == '*'){
        results = firstValue * secondValue  
    }else if(selectedValue == '/'){
        results = firstValue / secondValue  
    }

    result.innerHTML = results
    
})