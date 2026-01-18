const inputEl = document.querySelector('#name-input')

inputEl.addEventListener('input', handleInput)

function handleInput(event) {

    const inputValue = event.target.value;
    if (inputValue.trim().length) {
        document.querySelector('#name-output').textContent = inputValue;
    } else {
        document.querySelector('#name-output').textContent = 'Anonymous';
    }

    console.log(inputValue)
}