const inputs = document.querySelectorAll('input');
const passwordInputs = document.querySelectorAll('#password-inputs input');
const password = passwordInputs[0];
const confirmPassowrd = passwordInputs[1];

function validateForm(event) {
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.classList.add('invalid');
      event.preventDefault();
    }
  });
  document.querySelector('.invalid').focus();
}

function handlePasswordFocusOut() {
  if (this.checkValidity() && password.checkValidity() && this.value !== password.value) 
    this.classList.add('invalid');
}

function handlePasswordInput() {
  if ((this.id === 'password' && this.checkValidity() && this.value === confirmPassowrd.value) || 
    (this.id === 'confirm-password' && this.checkValidity() && password.checkValidity() && this.value === password.value)) {
    confirmPassowrd.classList.remove('invalid');
    confirmPassowrd.classList.add('match');
  }
  else 
    confirmPassowrd.classList.remove('match');
}

inputs.forEach(input => input.addEventListener('focusout', () => {
  if (!input.checkValidity())
    input.classList.add('invalid');
}));

inputs.forEach(input => input.addEventListener('input', () => {
  if (input.checkValidity())
    input.classList.remove('invalid');
}));

passwordInputs.forEach(input => input.addEventListener('input', handlePasswordInput));
confirmPassowrd.addEventListener('focusout', handlePasswordFocusOut);

document.addEventListener('submit', validateForm);