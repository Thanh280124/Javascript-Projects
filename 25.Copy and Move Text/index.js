const copyText = document.querySelector("textarea[name=copytxt");
const finalText = document.querySelector("textarea[name=finaltxt");
const moveBtn = document.querySelector(".moveBtn");
const copyBtn = document.querySelector(".copybtn");
const output = document.querySelector(".output");

copyBtn.addEventListener('click',() =>{
let temp = copyText.value;
copyToClipBoard(temp)
})

moveBtn.addEventListener('click',() =>{
  let temp = copyText.value
finalText.value = temp
})


copyText.addEventListener('click', function () { this.select(); });
finalText.addEventListener('click', function () { this.select(); });


function copyToClipBoard(str) {
  navigator.clipboard.writeText(str)
    .then(() => {
      output.innerHTML = `<h3>Content Copied</h3>`;
      output.classList.add('added');
      setTimeout(() => {
        output.classList.remove('added');
        output.textContent = '';
      }, 2000);
    })
    .catch((err) => {
      console.error('Failed to copy:', err);
    });
}
