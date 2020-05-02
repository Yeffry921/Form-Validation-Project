const valivateUsername = (username) => {
    const userLength = username.toString().length;
    return userLength <= 15 && userLength > 8 ? true : false;
};

const validateEmail = (input) => {
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(input)
        
    
};

const validatePassword = (password) => {
    const passw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return passw.test(password);

};

const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.textContent = message;
};

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
        if (input.value === '') {
            showError(input, `${input.id} is required`);
        }
    });
};

const checkUser = (user) => {
    if(valivateUsername(user.value)){
        showSuccess(username)
    } else {
        showError(username, `Username must be between 8 and 15 characters`);
    }
};

const checkPassword = (password) => {
    if(validatePassword(password.value)){
        showSuccess(password);
    } else {
        showError(password, `Password must be 8 characters minimum`);
    }
};

const checkPassword2 = (password2) => {
    if(validatePassword(password2.value)){
        showSuccess(password2);
    } else {
        showError(password2, `Password must be 8 characters minimum`);
    }
};

const checkEmail = (email) => {
    if(validateEmail(email.value)){
        showSuccess(email);
    } else {
        showError(email, `Please enter a correct email`);
    }
};

const checkpasswordMatch = (password, password2) => {
    if(password.value !== password2.value){
        showError(password2, 'Password don\'t match')
    } 
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkUser(username);
    checkPassword(password);
    checkPassword2(password2);
    checkEmail(email);
    checkpasswordMatch(password, password2);
    console.log(validatePassword(password.value))
    
})

