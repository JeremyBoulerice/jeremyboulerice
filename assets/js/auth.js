// @jeremyboulerice profile
const jeremyboulerice = {
     username: "jeremyboulerice",
     password: "hello"
}

function logIn() {
     // content block
     var contentBlock = document.getElementById("content");
     // login form
     var loginForm = document.getElementById("loginForm");

     // user input
     var inputUserID = document.getElementById("userID").value;
     var inputPassword = document.getElementById("password").value;

     // validation
     if (inputUserID === jeremyboulerice.username && inputPassword === jeremyboulerice.password) {
          contentBlock.className += "showContent";
          loginForm.className += "hideContent";
     } else {
          alert("ERROR");
     }

}
