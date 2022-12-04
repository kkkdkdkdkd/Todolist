const loginForm = document.getElementById("before-login-form");
const loginInput = document.getElementById("login-input");
const loginsubmit = document.getElementById("login-name");

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginsubmit.innerText = "Hi, " + username;
  loginInput.value = "";
}

loginForm.addEventListener("submit", handleLoginSubmit);
