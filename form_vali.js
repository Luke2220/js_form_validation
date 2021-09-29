const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const submitBtn = document.getElementById('submit');

email.addEventListener('blur', () => {if (validation.validateEmail(email) == false) {email.classList.add('invalid');}});
email.addEventListener('focus', () => {email.classList.remove('invalid')});

country.addEventListener('blur', () => {if (validation.validateIsText(country) == false) {country.classList.add('invalid')}});
country.addEventListener('focus', () => {country.classList.remove('invalid')});

zip.addEventListener('blur', () => {if (validation.validateZip(zip) == false) {zip.classList.add('invalid')}});
zip.addEventListener('focus', () => {zip.classList.remove('invalid')});

password.addEventListener('blur', () => {if (validation.validatePassword(password) == false) {password.classList.add('invalid')}});
password.addEventListener('focus', () => {password.classList.remove('invalid')});

passwordConfirm.addEventListener('blur', () => {if (validation.confirmPasword(password,passwordConfirm) == false) {passwordConfirm.classList.add('invalid')}});
passwordConfirm.addEventListener('focus', () => {passwordConfirm.classList.remove('invalid')});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validation.validateAll(submitBtn,email,country,zip,password,passwordConfirm)});

const validation = (() => {

    function validateEmail(input){
        if (input.validity.typeMismatch || input.validity.valueMissing){
            input.setCustomValidity("Please type an email address!");
        }else {
            input.setCustomValidity('');
        }
        return input.reportValidity();
    }

    function validateIsText(input){
        if (input.validity.patternMismatch  || input.validity.valueMissing){
            input.setCustomValidity('Please enter a country name!')
        } else {
            input.setCustomValidity('');
        }
        return input.reportValidity();
    }   

    function validateZip(input){
        if (input.validity.patternMismatch  || input.validity.valueMissing){
            input.setCustomValidity('Please enter a valid zipcode!');
        } else {
            input.setCustomValidity('');
        }
        return input.reportValidity();
    }   

    function validatePassword(input){
        if (input.validity.tooLong){
            input.setCustomValidity('Maximum length is 18 characters!');
        }else if (input.validity.tooShort || input.validity.valueMissing){
            input.setCustomValidity('Please use a password longer than 4 characters!');
        }else if(input.validity.patternMismatch){
            input.setCustomValidity('Please use letters or numbers!');
        } else{
            input.setCustomValidity('');
        }
        return input.reportValidity();
    }

    function confirmPasword(password,input){
        
            if (input.value != password.value || input.validity.valueMissing){
                input.setCustomValidity('Passwords do not match!');
            } else {
                input.setCustomValidity('');
            }
        
            return input.reportValidity();
        
    }

    function validateAll(input){
       if (validateEmail(arguments[1]) &&
        validateIsText(arguments[2]) &&
        validateZip(arguments[3]) &&
        validatePassword(arguments[4]) &&
        confirmPasword(arguments[4],arguments[5]) == true)
        {
            input.setCustomValidity('');
        } else {
            input.setCustomValidity('Please fill out the form correctly!');
        }
        console.log(input.checkValidity());
       input.reportValidity();

    }

return {validateEmail,validateIsText, validateZip,validatePassword,confirmPasword, validateAll}

})();

