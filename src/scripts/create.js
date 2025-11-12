const email = document.querySelector("#email-create");
const username = document.querySelector("#username-create");
const password = document.querySelector("#password-create");
const checkbox = document.querySelector("#checkbox-create");
const button = document.querySelector("#button-create");
const name = document.querySelector("#name-create");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

button.addEventListener("click", (event) => {
  const nameValue = name.value;
  const emailValue = email.value;
  const usernameValue = username.value;
  const passwordValue = password.value;
  event.preventDefault();

  if (
    emailValue === "" ||
    usernameValue === "" ||
    passwordValue === "" ||
    nameValue === ""
  ) {
    alert("Please fill in all the fields!");
    return;
  }
  if (!emailValue.includes("@")) {
    alert("Enter a valid email address!");
    return;
  }
  if (passwordValue.length < 8) {
    alert("The password must be at least 8 characters long!");
    return;
  }

  sessionStorage.setItem("name", nameValue);
  sessionStorage.setItem("password", passwordValue);
  sessionStorage.setItem("username", usernameValue);
  sessionStorage.setItem("email", emailValue);
  alert("Account created successfully!");

  window.location.href = "login.html";
});
