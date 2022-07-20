const inputs = document.querySelectorAll('input');
const passwordInputs = document.querySelectorAll('input[type="password"]');
const password = passwordInputs[0];
const confirmPassowrd = passwordInputs[1];

function validateForm(event) {
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.classList.add('invalid');
      event.preventDefault();
    }
  });

  if (password.checkValidity()) 
    validatePassword(event)

  document.querySelector('.invalid').focus();
}

function validatePassword(event) {
  if (password.value === confirmPassowrd.value) {
    confirmPassowrd.classList.remove('invalid');
    return;
  }

  if (password.checkValidity()) {
    confirmPassowrd.classList.add('invalid');
    event.preventDefault();
  }
}

inputs.forEach(input => input.addEventListener('focusout', () => {
  if (!input.checkValidity())
    input.classList.add('invalid');
}));

inputs.forEach(input => input.addEventListener('input', () => {
  if (input.checkValidity())
    input.classList.remove('invalid');
}));

document.addEventListener('submit', validateForm);


