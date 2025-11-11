const heading = document.querySelector("#heading-home");

const name = sessionStorage.getItem("name");

heading.textContent = `Hello, ${name}!`;
