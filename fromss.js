// Select form and input elements
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Select error message elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Add event listeners for real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Validation functions
function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block'; // Show error message
    } else {
        nameError.style.display = 'none'; // Hide error message
    }
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (emailInput.value.trim() === '') {
        emailError.style.display = 'block'; // Show error message
        emailError.textContent = 'Email is required.';
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = 'block'; // Show error message
        emailError.textContent = 'Please enter a valid email.';
    } else {
        emailError.style.display = 'none'; // Hide error message
    }
}

function validatePassword() {
    if (passwordInput.value.trim() === '') {
        passwordError.style.display = 'block'; // Show error message
        passwordError.textContent = 'Password is required.';
    } else if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block'; // Show error message
        passwordError.textContent = 'Password must be at least 8 characters long.';
    } else {
        passwordError.style.display = 'none'; // Hide error message
    }
}

// Prevent form submission for demonstration purposes
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate all fields before submission
    validateName();
    validateEmail();
    validatePassword();
    
    // Check if there are no error messages before submitting
    if (nameError.style.display === 'none' && emailError.style.display === 'none' && passwordError.style.display === 'none') {
        alert('Form submitted successfully!');
        // Here you can add the logic to submit the form
    }
});
