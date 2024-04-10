const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  event.preventDefault();

  if (login === "" || password === "") {
    alert("All form fields must be filled in");
  }
  else {
    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
  }
}