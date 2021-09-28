const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');

email.addEventListener('blur', () => {validation.validateEmail(email);});
country.addEventListener('blur', () => {validation.validateIsText(country)});
zip.addEventListener('blur', () => {validation.validateZip(zip)});

const validation = (() => {

    function validateEmail(input){
        if (input.validity.typeMismatch){
            input.setCustomValidity("Please type an email address!");
        }else {
            input.setCustomValidity('');
        }

        input.reportValidity();
    }

    function validateIsText(input){
        if (input.validity.patternMismatch){
            input.setCustomValidity('Please enter a country name!')
        } else {
            input.setCustomValidity('');
        }
        input.reportValidity();
    }   

    function validateZip(input){
        if (input.validity.patternMismatch || input.validity.tooLong){
            input.setCustomValidity('Please enter a valid zipcode!');
        } else {
            input.setCustomValidity('');
        }
        input.reportValidity();
    }   

return {validateEmail,validateIsText, validateZip}

})();

