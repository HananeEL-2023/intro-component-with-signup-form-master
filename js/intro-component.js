let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let password = document.getElementById("password");
let email = document.getElementById("email");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  if (firstName.value.trim() === "") {
    OnError(firstName, "First Name cannot be empty");
  } else {
    OnSucces(firstName);
  }
  if (lastName.value.trim() === "") {
    OnError(lastName, "Last Name cannot be empty");
  } else {
    OnSucces(lastName);
  }
  if (email.value.trim() === "") {
    OnError(email, "Email cannot be empty");
  } else {
    if (!isValidEmail(email.value.trim())) {
      OnError(email, "Looks like this is not an email");
    } else {
      OnSucces(email);
    }
  }
  if (password.value.trim() === "") {
    OnError(password, "Password cannot be empty");
  } else {
    OnSucces(password);
  }
}

function OnError(input, message) {
  let parent = input.parentElement;
  let errorMessage = parent.querySelector("span");
  errorMessage.style.visibility = "visible";
  errorMessage.innerText = message;
  input.classList.add("input-field");
}

function OnSucces(input) {
  let parent = input.parentElement;
  let errorMessage = parent.querySelector("span");
  errorMessage.innerText = "";
  input.classList.remove("input-field");
}

function isValidEmail(email) {
  return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
}
