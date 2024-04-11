const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  
  const form = event.target;
  const formLogin = form.elements.email.value.trim();
  const formPassword = form.elements.password.value.trim();
  event.preventDefault();

  if (formLogin === "" || formPassword === "") {
    alert("All form fields must be filled in");
  }
  else {
    const object = {
      email: formLogin,
      password: formPassword
    }
    console.log(object);
    form.reset();
  }
}