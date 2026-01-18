const inputEl = document.querySelector('#name-input')

inputEl.addEventListener('input', handleInput)

function handleInput(event) {

    const inputValue = event.target.value.trim();
    if (inputValue.length) {
        document.querySelector('#name-output').textContent = inputValue;
    } else {
        document.querySelector('#name-output').textContent = 'Anonymous';
    }

    console.log(inputValue)
}