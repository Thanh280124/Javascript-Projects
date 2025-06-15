// const input1 = document.querySelector('.input1')
// const input2 = document.querySelector('.input2')
// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const btn3 = document.querySelector('.btn3')
// const btn4 = document.querySelector('.btn4')
// const btn5 = document.querySelector('.btn5')
// const btn6 = document.querySelector('.btn6')

// input1.addEventListener('input', () =>{
//    input2.value = input1.value;
// })

//  btn1.addEventListener('click',() =>{
//    input2.style.textTransform = 'uppercase';
//   })


// btn2.addEventListener('click',() =>{
//    input2.style.textTransform = 'lowercase';
//   })

//   btn3.addEventListener('click',() =>{
//    input2.style.textTransform = 'capitalize';
//   })

//    btn4.addEventListener('click',() =>{
//    input2.style.fontWeight = 'bold';
//   }) 
//   btn5.addEventListener('click',() =>{
//    input2.style.fontStyle = 'italic';
//   })

//   btn6.addEventListener('click',() =>{
//    input2.classList.toggle('underline')
//   })


 const input1 = document.querySelector('.input1');
  const input2 = document.querySelector('.input2');
  const buttons = {
    uppercase: document.querySelector('.btn1'),
    lowercase: document.querySelector('.btn2'),
    capitalize: document.querySelector('.btn3'),
    bold: document.querySelector('.btn4'),
    italic: document.querySelector('.btn5'),
    underline: document.querySelector('.btn6'),
  };

  // Sync input1 to input2
  input1.addEventListener('input', () => {
    input2.value = input1.value;
  });

  // Text transform buttons
  buttons.uppercase.addEventListener('click', () => {
    input2.style.textTransform = 'uppercase';
  });

  buttons.lowercase.addEventListener('click', () => {
    input2.style.textTransform = 'lowercase';
  });

  buttons.capitalize.addEventListener('click', () => {
    input2.style.textTransform = 'capitalize';
  });

  // Font style buttons
  buttons.bold.addEventListener('click', () => {
    input2.style.fontWeight = 'bold';
  });

  buttons.italic.addEventListener('click', () => {
    input2.style.fontStyle = 'italic';
  });

  buttons.underline.addEventListener('click', () => {
    input2.classList.toggle('underline');
  });