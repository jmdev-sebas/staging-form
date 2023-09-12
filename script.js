// script.js
const inputFields = document.querySelectorAll('.input-field');

inputFields.forEach((inputField) => {
    const inputLabel = inputField.nextElementSibling;

    inputField.addEventListener('focus', () => {
        inputLabel.classList.add('label-up');
    });

    inputField.addEventListener('blur', () => {
        if (!inputField.value) {
            inputLabel.classList.remove('label-up');
        }
    });

    inputField.addEventListener('input', () => {
        if (inputField.value) {
            inputLabel.classList.add('label-up');
        } else {
            inputLabel.classList.remove('label-up');
        }
    });

    // Check for initial values on page load
    if (inputField.value) {
        inputLabel.classList.add('label-up');
    }
});
