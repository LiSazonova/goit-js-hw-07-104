const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const emailInput = elements.email.value.trim();
    const passwordInput = elements.password.value.trim();

    if (emailInput === '' || passwordInput === '') {
        return alert('All form fields must be filled in');
    }

    const formData = {
        email: emailInput,
        password: passwordInput
    }

    console.log(formData);

    form.reset();
}