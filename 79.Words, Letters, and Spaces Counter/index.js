const inputText = document.getElementById("inputText");
const wordCount = document.querySelector(".word");
const letterCount = document.querySelector(".letter");
const spaceCount = document.querySelector(".space");

inputText.addEventListener("input", () => {
  const text = inputText.value;

  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = `Word Count: ${words.length}`;


  const letters = text.replace(/[^a-zA-Z]/g, "");
  letterCount.textContent = `Letter Count: ${letters.length}`;

  const spaces = (text.match(/\s/g) || []).length;
  spaceCount.textContent = `Space Count: ${spaces}`;
});


// const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];

// function atLeastTwoCharacters(text) {
//   const letters = text.match(/[a-z]/gi) || [];
//   return letters.length >= 2;
// }

// function abscenceOfThreeConsecutiveCharacters(text) {
//   for (const character of text) {
//     const occurrences = Array.from(text).filter((v) => v == character).length;

//     if (occurrences >= 3) {
//       return false;
//     }
//   }

//   return true;
// }

// textInput.addEventListener("input", () => {
//   const splitted = textInput.value.trim().split(/[\s-]/);
//   const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
//   const spaceCount = (textInput.value.match(/\s+/g) || []).length;
//   let wordCount = 0;

//   outer: for (const text of splitted) {
//     for (const check of checks) {
//       if (!check(text)) {
//         continue outer;
//       }
//     }
//     wordCount++;
//   }

//   worldCountElement.textContent = wordCount;
//   letterCountElement.textContent = letterCount;
//   spaceCountElement.textContent = spaceCount;
// });