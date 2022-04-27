const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;


function displayMessage(messageText, color) {
  message.textContent = messageText;
  message.style.color = color;
  messageContainer.style.borderColor = color;
}


function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    displayMessage('Please fill out all fields.', '#dc143c');
    return;
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = '#2da778';
    password2El.style.borderColor = '#2da778';
  } else {
    passwordsMatch = false;
    displayMessage('Make sure passwords match.', '#dc143c')
    password1El.style.borderColor = '#dc143c';
    password2El.style.borderColor = '#dc143c';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    displayMessage('Successfully Registered!', '#2da778');
  }
}


function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}


function processFormData(event) {
  event.preventDefault();
  // Validate Form
  validateForm();
  // Submit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}


// Event Listener
form.addEventListener('submit', processFormData);
