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

  if (usernameValue === " " || passwordValue === "") {
    event.preventDefault();
    alert("Please fill in all the fields!");
    return;
  }

  if (usernameValue !== "luã" || passwordValue !== "123") {
    event.preventDefault();
    alert("Incorrect usermane or password");
    return;
  }

  alert("Access granted !");
});
