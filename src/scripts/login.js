const username = document.querySelector("#username-login");
const password = document.querySelector("#password-login");
const button = document.querySelector("#button-login");
const checkbox = document.querySelector("#checkbox-login");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

button.addEventListener("click", (event) => {
  const usernameValue = username.value;
  const passwordValue = password.value;
  event.preventDefault();

  if (usernameValue === " " || passwordValue === " ") {
    alert("Please fill in all the fields!");
    return;
  }
  const usernameSession = sessionStorage.getItem("username");
  const passwordSession = sessionStorage.getItem("password");

  if (usernameSession !== usernameValue || passwordSession !== passwordValue) {
    alert("Incorrect Password or Username");
    return;
  }

  window.location.href = "./home.html";
});
