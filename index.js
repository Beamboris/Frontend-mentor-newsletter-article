var subscriptionForm = document.getElementById("subscriptionForm")
var emailInput = document.getElementById('email')
var emailError = document.querySelector(".emailError")
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var success = document.getElementById('success')
var formContainer = document.getElementById('container')
var dismissBtn = document.getElementById('dismiss')

subscriptionForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var emailValue = emailInput.value.trim();

    if (emailValue.trim() === "") {
        emailError.style.display = "inline";
        emailError.innerText = "Email address is required";
        emailInput.style.borderColor = '#E23F44';
        emailInput.style.background = '#FFD6D7';
        emailInput.style.color = '#E23F44';

    } else if (!emailRegex.test(emailValue)) {
        emailError.style.display = "inline";
        emailError.innerText = "Valid email address is required";
        emailInput.style.borderColor = '#E23F44';
        emailInput.style.background = '#FFD6D7';
        emailInput.style.color = '#E23F44';

    } else {
        emailError.style.display = "";
        formContainer.style.display = 'none';
        success.style.display = 'flex'
        emailInput.style.borderColor = ''
        emailInput.style.background = ''
        emailInput.style.color = ''
        document.getElementById('email-bold').innerText = emailValue + "."
        }
});
dismissBtn.addEventListener('click', function(){
    success.style.display = 'none'
    formContainer.style.display = ''
})


