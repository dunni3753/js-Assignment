const inputFirstName = document.getElementById("inputFirstName");
const inputlastName = document.getElementById("inputLastName");
const inputEmail = document.getElementById("inputEmail");
const inputPhoneNo = document.getElementById("inputPhoneNo");
const inputAddress = document.getElementById("inputAddress");

const displayFirstName = document.getElementById("firstName");
const displaylastName = document.getElementById("lastName");
const displayEmail = document.getElementById("emailAddress");
const displayAddress = document.getElementById("address");
const displayPhoneNo = document.getElementById("contactNo");


inputFirstName.addEventListener("keyup", () => {
  displayFirstName.innerHTML= inputFirstName.value;
});

inputLastName.addEventListener("keyup", () => {
  displaylastName.innerHTML = inputlastName.value;
});

inputEmail.addEventListener("keyup", () => {
  displayEmail.innerHTML = inputEmail.value;
});

inputPhoneNo.addEventListener("keyup", () => {
  displayPhoneNo.innerHTML = inputPhoneNo.value;
});

inputAddress.addEventListener("keyup", () => {
  displayAddress.innerHTML = inputAddress.value;
});
  




// function updateIDCard() {
// const firstName = document.getElementById('inputFirstName').value;
// const lastName = document.getElementById('inputLastName').value;
// const email = document.getElementById('inputEmail').value;
// const phoneNo = document.getElementById('inputPhoneNo').value;
// const address = document.getElementById('inputAddress').value;

// document.getElementById('firstName').innerText = `First Name: ${firstName}`;
// document.getElementById('lastName').innerText = `Last Name: ${lastName}`;
// document.getElementById('emailAddress').innerText = `Email: ${email}`;
// document.getElementById('address').innerText = `Address: ${address}`;
// document.getElementById('contactNo').innerText = `Contact No: ${phoneNo}`;
  
// }