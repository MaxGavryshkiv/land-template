const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Write the email and the password");
    return;
  }
  console.log(`email: ${email.value},
  password: ${password.value}`);
  e.currentTarget.reset();
}
