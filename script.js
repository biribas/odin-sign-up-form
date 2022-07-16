const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('focusout', e => {
  if (!input.checkValidity())
    input.classList.add('invalid');
  else
    input.classList.remove('invalid');
}));