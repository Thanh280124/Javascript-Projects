const time = document.querySelector("p");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");
console.log(startButton, stopButton, resetButton);

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);  
resetButton.addEventListener("click", resetTimer);

let seconds = 0;
let interval; 
function startTimer() {
  interval = setInterval(() => {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    time.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  time.textContent = "00:00:00";
}