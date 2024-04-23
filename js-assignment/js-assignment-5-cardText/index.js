const inputFirstName = document.getElementById("inputFirstName");
const inputlastName = document.getElementById("inputLastName");
const inputEmail = document.getElementById("inputEmail");
const inputPhoneNo = document.getElementById("inputPhoneNo");
const inputAddress = document.getElementById("inputAddress");
const signUp = document.getElementById("signUp");

const displayFirstName = document.getElementById("firstName");
const displaylastName = document.getElementById("lastName");
const displayEmail = document.getElementById("emailAddress");
const displayAddress = document.getElementById("Address");
const displayPhoneNo = document.getElementById("contactNo");


signUp.addEventListener("click", (e) => {
  e.preventDefault();
  displayFirstName.innerHTML= inputFirstName.value
  displaylastName.innerHTML = inputlastName.value
  displayEmail.innerHTML = inputEmail.value
  displayPhoneNo.innerHTML = inputPhoneNo.value
  displayAddress.innerHTML = inputAddress.value
});

// document.getElementById('name').innerText = `Name: ${name}`;