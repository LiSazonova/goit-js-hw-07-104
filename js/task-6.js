function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}

const input = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
let amount = 0;

input.addEventListener('input', onInput);
btnCreate.addEventListener('click', () => createBoxes(amount));
btnDestroy.addEventListener('click', destroyBoxes);


function onInput(event) {
    amount = event.target.value;
}

function createBoxes(amount) {
    if (amount >= 1 && amount <= 100) {
        boxes.innerHTML = '';
        let size = 30;
        for (let i = 0; i < amount; i += 1) {
            const div = document.createElement('div');
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            div.style.backgroundColor = getRandomHexColor();
            boxes.append(div);
            size += 10;
        }
        input.value = '';
    }
}

function destroyBoxes() {
    boxes.innerHTML = '';
}