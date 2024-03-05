// Get all emoji boxes
const emojiBoxes = document.querySelectorAll('.emoji-box');
const emojiContainer = document.querySelector('.form-elements');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

// selected emoji is the p tag inside the emoji-box
let selectedEmoji = 'Satisfied';


emojiContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('emoji-box')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        // selectedEmoji is the p tag inside the emoji-box active class

        selectedEmoji = e.target.nextElementSibling.innerHTML;
    }
})

sendBtn.addEventListener('click', (e) => {
    console.log(selectedEmoji.value);
    // selectedEmoji is the p tag inside the emoji-box active class
    panel.innerHTML = `
        ❤️<br><br>
        Your feedback really matters to us! <br><br>
        
        Feedback : ${selectedEmoji}<br><br>
        We'll use your feedback to improve the products from phiUture.
    `
})

function removeActive() {
    for (let i = 0; i < emojiBoxes.length; i++) {
        emojiBoxes[i].classList.remove('active');
    }
}
