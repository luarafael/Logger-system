const email = document.querySelector("#email-create");
const username = document.querySelector("#username-create");
const password = document.querySelector("#password-create");
const checkbox = document.querySelector("#checkbox-create");
const button = document.querySelector("#button-create");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

button.addEventListener("click", (event) => {
  const emailValue = email.value;
  const usernameValue = username.value;
  const passwordValue = password.value;

  if (emailValue === "" || usernameValue === "" || passwordValue === "") {
    alert("Please fill in all the fields!");
    return;
  }
  if (!emailValue.includes("@")) {
    alert("Enter a valid email address!");
    return;
  }
  if (passwordValue.length < 8) {
    alert("The password must be at least 6 characters long!");
    return;
  }

  alert("Account created successfully!");

  window.location.href = "login.html";
});
