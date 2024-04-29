const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handleInput);

function handleInput(event) {
    const inputValue = event.currentTarget.value.trim();
    console.log(inputValue)
    if (inputValue === '') {
        nameOutput.textContent = 'Anonymus';
    } else {
        nameOutput.textContent = inputValue;
    }
}