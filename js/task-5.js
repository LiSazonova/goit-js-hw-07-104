const body = document.querySelector('body');
const btnChange = document.querySelector('.change-color');
const span = document.querySelector('.color');

btnChange.addEventListener('click', handleClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function handleClick() {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    span.textContent = color;
}