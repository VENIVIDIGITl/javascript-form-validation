const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;


function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = '#dc143c';
    messageContainer.style.borderColor = '#dc143c';
    return;
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = '#2da778';
    password2El.style.borderColor = '#2da778';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = '#dc143c';
    messageContainer.style.borderColor = '#dc143c';
    password1El.style.borderColor = '#dc143c';
    password2El.style.borderColor = '#dc143c';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = '#2da778';
    messageContainer.style.borderColor = '#2da778';
  }
}


function processFormData(event) {
  event.preventDefault();
  // Validate Form
  validateForm();  
}


// Event Listener
form.addEventListener('submit', processFormData);
