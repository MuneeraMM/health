const form = document.querySelector("form"),
        emailField = form.querySelector(".email-field"),
        emailInput = emailField.querySelector(".email"),
        passField = form.querySelector(".create-password"),
        passInput = passField.querySelector(".password"),
        cPassField = form.querySelector(".confirm-password"),
        cPassInput = cPassField.querySelector(".cpassword");

// Email Vaidation
function checkEmail() {
    const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailpattern)) {
        return emailField.classList.add("invalid");  // adding invalid cass if email value do not match with email
    }
    emailField.classList.remove("invalid");   // removing invalid class if email value matched with emailpattern
}

// Password validation
function createPass() {
    const passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    if(!passInput.value.match(passpattern)) {
        return passField.classList.add("invalid"); // adding invalid cass if password value do not match with password.
    }
    passField.classList.remove("invalid");   // removing invalid class if password value matched with passpattern

}

// Confirm validation
function confirmPass() {
    if(passInput.value !== cPassInput.value || cPassInput.value === ""){
        // console.log("true");
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");   // removing invalid class if password value matched with passpattern

}

// Calling function on form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();  // preventing form submitting  
    checkEmail();
    createPass();
    confirmPass();

    // calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action")
    }
});