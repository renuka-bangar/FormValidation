document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const container = document.querySelector('.container');
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); //Hepls to  Prevent the form from submitting by default
        if (validateForm()) {
            // console.log("First Name:", firstNameInput.value);
            // console.log("Last Name:", lastNameInput.value);
            // console.log("Email:", emailInput.value);
            // console.log("Password:", passwordInput.value);
            displayThankYouMessage(); // Display ty msg  if validation passes
        } else {
            displaySubmissionError(); // Display submission error and shake the form if validation fails
        }
    });

    function validateForm() {
        let isValid = true; // Flag to track if the form is valid
        isValid &= validateFirstname();
        isValid &= validateLastname();
        isValid &= validateEmail();
        isValid &= validatePassword();
        if (isValid) {
            console.log("First Name:", firstNameInput.value);
            console.log("Last Name:", lastNameInput.value);
            console.log("Email:", emailInput.value);
            console.log("Password:", passwordInput.value);
        }
        return !!isValid; // Return true if all validations pass
    }

    function validateFirstname() {
        const firstname = firstNameInput.value.trim();
        const errorElement = document.getElementById('fnameError');
        const namePattern = /^[A-Za-z]+$/;
        if (firstname === '') {
            errorElement.textContent = 'First Name is required';
            errorElement.style.display = 'block';
            return false;
        } else if (!namePattern.test(firstname)) {
            errorElement.textContent = 'First Name can only contain letters';
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            return true;
        }
    }

    function validateLastname() {
        const lastname = lastNameInput.value.trim();
        const errorElement = document.getElementById('lnameError');
        const namePattern = /^[A-Za-z]+$/;
        if (lastname === '') {
            errorElement.textContent = 'Last Name is required';
            errorElement.style.display = 'block';
            return false;
        } else if (!namePattern.test(lastname)) {
            errorElement.textContent = 'Last Name can only contain letters';
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const errorElement = document.getElementById('emailError');
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === '') {
            errorElement.textContent = 'Email is required';
            errorElement.style.display = 'block';
            return false;
        } else if (!emailPattern.test(email)) {
            errorElement.textContent = 'Enter a valid email';
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        const errorElement = document.getElementById('passwordError');
        if (password === '') {
            errorElement.textContent = 'Password is required';
            errorElement.style.display = 'block';
            return false;
        } else if (password.length < 6) {
            errorElement.textContent = 'Password must be at least 6 characters long';
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            return true;
        }
    }

    function shakeForm() {
        container.classList.add('shake');
        setTimeout(() => {
            container.classList.remove('shake');
        }, 500);
    }

    function displayThankYouMessage() {
        form.style.display = 'none'; // Hide the form
        errorMessage.style.display = 'none'; // Hide the error message
        thankYouMessage.style.display = 'block'; // Show the thank you message
    }

    function displaySubmissionError() {
        shakeForm(); // help in Shaking the form container
        errorMessage.style.display = 'block'; // Shows the submission error message in the container
    }
});
