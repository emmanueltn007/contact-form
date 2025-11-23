const firstName = document.querySelector('#first-name');
const firstNameAlert = document.querySelector('#js-first-name-alert');
const lastName = document.querySelector('#last-name');
const lastNameAlert = document.querySelector('#js-last-name-alert');
const email = document.querySelector('#email-address')
const emailAlert = document.querySelector('#js-email-alert');
const radioContainer = document.querySelector('#js-radio-container');
const enquiryAlert = document.querySelector('#js-enquiry-alert');
const message = document.querySelector('#message');
const messageAlert = document.querySelector('#js-message-alert');
const consentAlert = document.querySelector('#js-consent-alert');
const submitBtn = document.querySelector('#submit-btn');

function submitForm () {
    const checked = document.querySelector('input[name="choice"]:checked');
    const consent = document.querySelector('input[type="checkbox"]:checked');

    if (firstName.value.trim() === '') {
        firstNameAlert.textContent = 'This field is required';
        firstName.style.borderColor = 'hsl(0, 66%, 54%)';
    }
    else {
        firstNameAlert.textContent = '';
        firstName.style.borderColor = '';
    }

     if (lastName.value.trim() === '') {
        lastNameAlert.textContent = 'This field is required';
        lastName.style.borderColor = 'hsl(0, 66%, 54%)';
    }
    else {
        lastNameAlert.textContent = '';
        lastName.style.borderColor = '';
    }

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value.trim() === '') {
        emailAlert.textContent = 'This field is required';
        email.style.borderColor = 'hsl(0, 66%, 54%)';
    }
    else if (!validEmail.test(email.value)) {
        emailAlert.textContent = 'Please enter a valid email address';
        email.style.borderColor = 'hsl(0, 66%, 54%)';
    }
    else {
        emailAlert.textContent = '';
        email.style.borderColor = '';
    }

    if (message.value.trim() === '') {
        messageAlert.textContent = 'This field is required';
        message.style.borderColor = 'hsl(0, 66%, 54%)';
    }
    else {
        messageAlert.textContent = '';
        message.style.borderColor = '';
    }

    if (!checked) {
        enquiryAlert.textContent = 'Please select a query type';
        radioContainer.style.border = '1px solid hsl(0, 66%, 54%)';
    }
    else {
        enquiryAlert.textContent = '';
        radioContainer.style.border = '';
    }

    if (!consent) {
        consentAlert.textContent = 'To submit this form, please consent to be contacted';
    }
    else {
        consentAlert.textContent = '';
    }

    if (firstName.value.trim() !== ''
         && lastName.value.trim() !== '' 
         && email.value.trim() !== '' 
         && validEmail.test(email.value) 
         && message.value.trim() !== '' 
         && checked 
         && consent) {
            document.querySelectorAll('input[name="choice"]').forEach(radio => {
                radio.checked = false;
            });

            document.querySelector('input[type="checkbox"]').checked = false;

            window.location.href = 'success.html';
    }
    
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
})