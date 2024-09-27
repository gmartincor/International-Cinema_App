// Select form and input elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age'); // Added age field
const email = document.getElementById('email'); 
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Validate email format
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Validate age
function checkAge(input) {
  const ageValue = parseInt(input.value.trim(), 10);
  if (isNaN(ageValue)) {
    showError(input, 'Age must be a number');
  } else if (ageValue < 0 || ageValue >= 1000) {
    showError(input, 'Age must be between 0 and 999');
  } else {
    showSuccess(input);
  }
}

// Validate password format
function checkPassword(input) {
  const passwordValue = input.value.trim();
  // Regex for at least 8 chars, uppercase, lowercase, number, and special char
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_+\-={}\[\]\\:";'<>?,.]).{8,}$/;
  if (!passwordPattern.test(passwordValue)) {
    showError(input, 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character');
  } else {
    showSuccess(input);
  }
}

// Check if passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  } else {
    showSuccess(input2);
  }
}

// Capitalize field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Check required fields
  if (!checkRequired([username, age, email, password, password2])) {
    checkLength(username, 3, 15);        
    checkAge(age);                       
    checkEmail(email);                   
    checkLength(password, 8, 25);        
    checkPassword(password);             
    checkPasswordsMatch(password, password2); 
  }
});
