const formEl = document.querySelector('.login-form');

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;
    const emailValue = elements.email.value.trim();
    const passwordValue = elements.password.value.trim();

    if (emailValue.length && passwordValue.length) {
        console.log({
            'email': emailValue,
            'password': passwordValue,
        })
        formEl.reset();
    } else {
        alert('All form fields must be filled in')
    }
}