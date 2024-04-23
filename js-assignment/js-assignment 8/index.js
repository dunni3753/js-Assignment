    var firstName = document.getElementById('firstName').value;
    let validateFirstName = document.getElementById("validateFirstName");

    var lastName = document.getElementById('lastName').value;
    let validateLastName = document.getElementById("validateLastName");

    var email = document.getElementById('email').value;
    let validateEmail = document.getElementById("validateEmail");

    var age = document.getElementById('age').value;
    let validateAge = document.getElementById("validateAge");

    let signUp = document.getElementById("signUp");


    signUp.addEventListener("click", (e) => {
      e.preventDefault();


      if (firstName.value == "") {
        validateFirstName.innerHTML = "First Name is Required."
      } else {
        validateFirstName = "";
      }
      if (lastName.value == "") {
        validateLastName.innerHTML = "Last Name is Required."
      } else {
        validateLastName = "";
      }
      if (email.value == "") {
        validateEmail.innerHTML = "Email is Required."
      } else {
        validateEmail = "";
      }
      if (age.value == "") {
        validateAge.innerHTML = "Your Age is Required. "
      } if (age < 25) {
        validateAge.innerHTML = "You Are Too Young "
      } else {
        validateAge = "";
      }
    })