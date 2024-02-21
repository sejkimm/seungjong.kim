const typingText =
    "Hello. I am SEJ, a code-first data user.\n\n" +
    "I am actively seeking opportunities to contribute to a better world, \n" +
    "particularly in areas such as the equitable distribution of resources, \n" +
    "the elimination of information asymmetry, \n" +
    "and a world where everyone can contribute. \n\n" +
    "If you aim to 'Do the right things' \n" +
    "and are looking for someone to join you, feel free to contact me.\n\n" +
    "I am ready to align with your 'right things'.\n"
const thankyou = "Thank you."
let currentCharIndex = 0;
let currentOutput = '';
const outputElement = document.getElementById('typing');


function typeEffect() {
    if (currentCharIndex < typingText.length) {
        const currentChar = typingText.charAt(currentCharIndex);
        if (currentChar === '\n') {
            currentOutput += '<br>';
        } else {
            currentOutput += currentChar;
        }
        outputElement.innerHTML = currentOutput;
        currentCharIndex++;
        let delay = currentChar === '\n' ? 500 : 60;

        setTimeout(typeEffect, delay);
    } else {
        applyGradientEffect();
    }
}


function applyGradientEffect() {
    const specialWords = ["right things"];
    let innerHTML = outputElement.innerHTML;
    specialWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        innerHTML = innerHTML.replace(regex, `<span class="gradient-text">$&</span>`);
    });
    outputElement.innerHTML = innerHTML;
}

window.onload = function () {
    setTimeout(typeEffect, 500);
};