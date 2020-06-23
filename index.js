// CONDITION VALIDATIONS
const validateEmail = (email) => {
	const emailReg = /^[^@]+@[^@]+\.[^@]+$/;
	return emailReg.test(email);
};
const validateCountry = (string) => {
	return string.length >= 2;
};
const validateZipCode = (number) => {
	return number.length >= 5;
};
const validatePassword = (password) => {
	const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	return passwordReg.test(password);
};
const validateMatch = (password, passwordConfirm) => {
	if (password === passwordConfirm) {
		return true;
	}
	return false;
};
// ALERT SUCCESS OR FAILURE
const showSuccess = (element) => {
  element.className = 'form-control success';
};
const showfailure = (element) => {
  element.className = 'form-control fail';
};
const alertOutcome = (outcome, e) => {
  const formControl = e.target.parentElement;
	if (outcome) {
    showSuccess(formControl);
	} else {
    showfailure(formControl);
  }
};
// INPUT HANDLER
const validateHandler = (e) => {
	if (e.target.name === 'email') {
		const testEmail = validateEmail(e.target.value);
		alertOutcome(testEmail, e);
	}
	if (e.target.name === 'country') {
		const testCountry = validateCountry(e.target.value);
		alertOutcome(testCountry, e);
	}
	if (e.target.name === 'zipCode') {
		const testZip = validateZipCode(e.target.value);
		alertOutcome(testZip, e);
	}
	if (e.target.name === 'password') {
		const testPassword = validatePassword(e.target.value);
		alertOutcome(testPassword, e);
	}
	if (e.target.name === 'passwordConfirm') {
		const password = document.querySelector('#password').value;
		const testPassConfirm = validateMatch(password, e.target.value);
		alertOutcome(testPassConfirm, e);
	}
};

// EVENT LISTERNERS
document.querySelector('.form').addEventListener('input', validateHandler);
