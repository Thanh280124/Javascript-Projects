const btn = document.querySelector('.btn');
const feedback = document.querySelector('.feedback')
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const emojis = document.querySelectorAll('.div-img');

let selectedFeedback = "";

emojis.forEach((emojiDiv) => {
    emojiDiv.addEventListener('click', () => {
        
        emojis.forEach(div => div.classList.remove('active'));
    
        emojiDiv.classList.add('active');


        selectedFeedback = emojiDiv.querySelector('.emoji').innerText;
    });
});

btn.addEventListener('click', () => {
    if (selectedFeedback) {
        content1.style.display = "none";
        content2.style.display = "block";
        feedback.innerText = selectedFeedback;
    } else {
        alert("Please select your feedback before submitting!");
    }
});