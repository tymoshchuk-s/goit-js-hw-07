const formEl = document.querySelector('.login-form');

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;
    const emailValue = elements.email.value;
    const passwordValue = elements.password.value;

    if (emailValue.trim().length && passwordValue.trim().length) {
        console.log ({
            'Email': emailValue,
            'Password': passwordValue,
        })
    } else {
        alert('All form fields must be filled in')
    }

    formEl.reset();
    
}