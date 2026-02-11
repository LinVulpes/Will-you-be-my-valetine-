const messages = [
    "NO?!? 😱",
    "If you say no, I will be really sad... 😔",
    "Aww… are you sure? 🥺",
    "Like… *really* really sure? 🥹",
    "Are you positive?",
    "Pookie pweaseee... 🥺🙏",
    "What if I ask nicely? 😚",
    "Still No?... gassppp",
    "My dramatic gasp echoes through the room 😮‍💨, Still No?",
    "Ok fine, I will stop asking... 😤",
    "Just kidding, say yes please! ❤️",
    "How about I love u? Please say Yes?? 😁😁",
    "pweaseee... 🥺",
    "pweaseeeeeeeeee... 🥺",
    "pweasee baby ... 🥹"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}