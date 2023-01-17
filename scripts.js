function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("password-confirm").value;
    var errorMessage = document.getElementById("error-message");
  
    if (email === "" || password === "" || passwordConfirm === "") {
      errorMessage.innerHTML = "Please fill in all fields.";
      return false;
    } else if (password !== passwordConfirm) {
      errorMessage.innerHTML = "Passwords do not match.";
      return false;
    } else {
      errorMessage.innerHTML = "";
      return true;
    }
  }
  

