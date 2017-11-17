// USER PROFILES

// @jeremyboulerice profile
const jeremyboulerice = {
     userID: "jeremyboulerice",
     password: "HelloWorld1234!"
}

// login form
var loginForm = document.getElementById("loginForm").value;
// content block
var contentBlock = document.getElementById("content").value;

// logIn() function
function logIn() {
     // user input
     var userIDInput = document.getElementById("userID").value;
     var passwordInput = document.getElementById("password").value;
     // validation
     if (userIDInput == jeremyboulerice.userID && passwordInput == jeremyboulerice.password) {
          loginForm.classList.add('hideContent');
          contentBlock.classList.add('showContent');
     } else {
          alert("error"); // action
     }
}
