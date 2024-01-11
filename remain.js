const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const emailEl = document.getElementById("email")
const passwordEl =  document.getElementById("password")
const submitBtn = document.getElementById("submit")
const form = document.getElementById("fill")
let error = false

submitBtn.addEventListener("click", () => {
    if(firstName.value == "") {
        firstName.classList.add("error-border")
        firstName.classList.add("border")
        firstName.nextElementSibling.innerHTML = "First Name cannot be empty"
    }
    if(lastName.value == "") {
        lastName.classList.add("error-border")
        lastName.classList.add("border")
        lastName.nextElementSibling.innerHTML = "Last Name cannot be empty"
    }
    if(emailEl.value == "") {
        emailEl.classList.add("error-border")
        emailEl.classList.add("email")
        emailEl.classList.add("border")
        emailEl.nextElementSibling.innerHTML = "Looks like this is not an email"
        emailEl.placeholder = "email@example/com"
    }
    if(passwordEl.value === "") {
        passwordEl.classList.add("error-border")
        passwordEl.classList.add("border")
        passwordEl.nextElementSibling.innerHTML = "Password cannot be empty"
    }
    if(passwordEl.value.length <= 7) {
        passwordEl.classList.add("error-border")
         passwordEl.classList.add("border")
        passwordEl.nextElementSibling.innerHTML = "Must be at least 8 character"
    }
})
