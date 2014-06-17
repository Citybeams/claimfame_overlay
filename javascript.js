//form events
// this grabs the email field
var emailField = document.getElementById("email");

//means we click into the form field, if the value is "your email"
//then it gets get to blank
emailField.onfocus = function() {
  if ( emailField.value == "Email"){
    emailField.value = "";
  }
};
//means if it's empty it changes back to "your email"
emailField.onblur = function() {
  if ( emailField.value == "") {
    emailField.value = "Email";
  }
};
