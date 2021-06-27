const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePass = document.getElementById('rePass');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, email, password, rePass]);
    checkLength(username, 3, 15);
    checkEmail(email);
    checkLength(password, 6, 25);
    checkPasswordsMatch(pass, rePass);
});

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.textContent = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() == '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max+1} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(pass, rePass) {
    if (pass.value !== rePass.value) {
        showError(rePass, 'Passwords do not match');
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}