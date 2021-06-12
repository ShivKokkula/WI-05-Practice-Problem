//UC-1 As a User need to enter a valid First Name
const text = document.querySelector("#text");
const textError = document.querySelector(".error-text");
text.addEventListener("input",function(){
    let numRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (numRegex.test(text.value)) {
        textError.textContent = "";
    }else{
        textError.textContent = "Number is incorrect";
    }
});

//UC-2 As a User need to enter a valid email
const email = document.querySelector("#email");
const errorEmailText = document.querySelector(".error-email");
email.addEventListener("input", function(){
    let emailRegex = RegExp("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$");
    if (emailRegex.test(email.value)) {
        errorEmailText.textContent = "";
    } else {
        errorEmailText.textContent = "Invalid email";
    }
});

//UC-3 As a User need to follow pre-defined
const mobile = document.querySelector("#tel");
const errorMobileText = document.querySelector(".error-tel");
mobile.addEventListener("input", function() {
    let mobileRegex = RegExp("^\\d{2}[ ]\\d{10}$");
    if (mobileRegex.test(mobile.value)) {
        errorMobileText.textContent = "";
    } else {
        errorMobileText.textContent = "Invalid mobile number";
    }
});

//UC-4-5 - As a User need to follow pre-defined Password rules.
const password = document.querySelector("#pwd");
const passwordText = document.querySelector(".error-pwd");
password.addEventListener("input", function() {
    let passwordRegex = RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&-+=()]).{8,20}$");
    if (passwordRegex.test(password.value)) {
        passwordText.textContent = "";
    } else {
        passwordText.textContent = "Invalid mobile number";
    }
});

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input",function(){
    output.textContent = salary.value;
});