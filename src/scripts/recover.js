const username = document.querySelector("#username-recover");
const npassword = document.querySelector("#npassword-recover");
const cpassword = document.querySelector("#cpassword-recover");
const checkbox = document.querySelector("#checkbox-recover");
const button = document.querySelector("#button-recover");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    cpassword.type = "text";
    npassword.type = "text";
  } else {
    cpassword.type = "password";
    npassword.type = "password";
  }
});

button.addEventListener("click", (event) => {
  const usernameValue = username.value;
  const npasswordValue = npassword.value;
  const cpasswordValue = cpassword.value;
  event.preventDefault();

  if (usernameValue == "" || npasswordValue == "" || cpasswordValue == "") {
    alert("Please fill in all the fields!");
    return;
  }
  if (npasswordValue.length < 8 || cpasswordValue.length < 8) {
    alert("The password must be at least 8 characters long!");
    return;
  }
  if (npasswordValue !== cpasswordValue) {
    alert("Passwords do not match!");
    return;
  }
  if (username.value !== sessionStorage.getItem("username")) {
    alert("username does not exist!");
    return;
  }

  if (npasswordValue === sessionStorage.getItem("password")) {
    alert("This password has already been used.");
    return;
  }

  sessionStorage.setItem("password", npasswordValue);
  alert("Password successfully recovered!");

  window.location.href = "./login.html";
});
