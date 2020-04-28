const form = document.querySelector('.form');


const validator = (() => {

    const valivateUsername = (username) => {
        const userLength = username.toString().length;
        return userLength <= 15 && userLength > 8 ? true : false;
    }

    const validateEmail = (email) => {
        const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailReg.test(String(email).toLowerCase());
    }

    const validatePassword = (password) => {
        const passw = /^[A-Za-z]\w{7,14}$/;
        return passw.test(password);
    }

    const checkpasswordMatch = (password, password2) => {
        if (password.length <= 0 || password2.length <= 0) return false
        return password.toString() === password2.toString();
    }

    return {
        valivateUsername,
        validateEmail,
        validatePassword,
        checkpasswordMatch
    }
})();

const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const password2Input = document.querySelector('#password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;

    if (validator.valivateUsername(username)) {
        runSuccess(usernameInput);
    } else {
        runFailure(usernameInput);
    }

    if (validator.validateEmail(email)) {
        runSuccess(emailInput);
    } else {
        runFailure(emailInput);
    }

    if (validator.validatePassword(password)) {
        console.log('passed')
        if (validator.checkpasswordMatch(password, password2)) {
            runSuccess(password2Input);
        } else {
            runFailure(password2Input);
        }
    } else {
        
    }
})

const runSuccess = (input) => {
    input.classList.add('success');
}

const runFailure = (input) => {
    input.classList.add('fail');
}