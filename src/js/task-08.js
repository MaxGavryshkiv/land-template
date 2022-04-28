const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { login, password },
  } = e.currentTarget;
  if (login.value === "" || password.value === "") {
    alert();
  }
}
