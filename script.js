const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
const body = document.querySelector('body');
const inputContainers = document.querySelectorAll('.input-container');
const inputFields = document.querySelectorAll('.input-field');
const inputLabels = document.querySelectorAll('.input-label');


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

// Toggle dark mode
toggleDarkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    inputContainers.forEach((inputContainer) => {
      inputContainer.classList.toggle("dark-mode");
    });
  
    inputFields.forEach((inputField) => {
      inputField.classList.toggle("dark-mode");
    });
  
    inputLabels.forEach((inputLabel) => {
      inputLabel.classList.toggle("dark-mode");
    });
  });
