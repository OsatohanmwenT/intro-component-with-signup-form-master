// Get form element by its ID
const form = document.getElementById('fill');
let errorEl = document.querySelector('error-text');
// Add event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting

  // Get user input values
  const firstName = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const emailEl = document.getElementById('email');
  const passwordEl = document.getElementById('password');

  // Validate user input (you can add more validation logic)
    if (firstName.value === ''|| lastName.value === '' || emailEl.value === '' || passwordEl.value === '') {
      firstName.classList.add("error-border");
      firstName.nextElementSibling.innerHTML = "First name is required"
      lastName.classList.add("error-border");
      lastName.nextElementSibling.innerHTML = "Last name is required"
      emailEl.classList.add("error-border");
      emailEl.nextElementSibling.innerHTML = "Email is required"
      passwordEl.classList.add("error-border")
      passwordEl.nextElementSibling.innerHTML = "Password is required"
      return;
    } else {
       alert("successful")
    }

  // Create an object to store user data
  const userData = {
    firstname: firstName.value,
    lastname: lastName.value,
    email: emailEl.value,
    password: passwordEl.value
  };

  // Perform further actions (e.g., send data to server, display success message)
  // You can make an AJAX request to send the data to the server

  // Reset form fields
  form.reset();
});
