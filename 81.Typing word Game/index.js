const sentences = document.querySelector(".sentences");
const input = document.getElementById("inputText");
const btn = document.querySelector(".btn");
const result = document.getElementById("result");

const words = [
  "Hello World",
  "JavaScript is fun",
  "Typing game is interesting",
  "Keep practicing",
  "Improve your typing speed"
];

let startTime;
let currentSentence = "";
let isTyping = false;

btn.addEventListener("click", () => {
  if (!isTyping) {
    // Start mode
    const randomIndex = Math.floor(Math.random() * words.length);
    currentSentence = words[randomIndex];
    sentences.textContent = currentSentence;
    input.value = "";
    input.focus();
    btn.textContent = "Done";
    result.textContent = "";
    startTime = new Date().getTime();
    isTyping = true;
  } else {
    // Done mode
    const endTime = new Date().getTime();
    const totalTime = ((endTime - startTime) / 1000).toFixed(2); // seconds
    const typedText = input.value;

    let score = 0;
    const currentWords = currentSentence.split(" ");
    const typedWords = typedText.split(" ");

    currentWords.forEach((word, index) => {
      if (typedWords[index] === word) {
        score++;
      }
    });

    result.innerHTML = `
      <p>Time: ${totalTime} seconds</p>
      <p>Score: ${score} / ${currentWords.length}</p>
    `;

    btn.textContent = "Start";
    isTyping = false;
  }
});