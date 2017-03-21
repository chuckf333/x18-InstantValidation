function register(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert("Username: " + userEntered + "\n" + "Password: " + passEntered);
}

function validateUsername(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(userEntered.length < 6) {
    //Show message that the username is too short...
    document.getElementById("usernameError").innerHTML=
    "Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if(userEntered.includes(" ")) {
    //Show message that there is space in the username...
    document.getElementById("usernameError").innerHTML=
    "Username cannot contain a space";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    //Turns username items green
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameError").classList.add("hidden-message");
  }
}

function validatePassword(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  //function to parse the characters in the password
  function thePasswordIsPassword(pw) {
    pw = pw.toLowerCase();
    if(pw == "password") {
      return true;
    }
    else {
      return false;
    }
  }

  if(passEntered.length < 6 || passEntered.length > 20) {
    //Show message that the password is too short or too long
    document.getElementById("passwordError").innerHTML=
    "Password must be between 6 and 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered == userEntered) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML=
    "The password cannot be the same as the username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(thePasswordIsPassword(passEntered)) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML=
    "The password cannot be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
    //Turns password items green
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordError").classList.remove("shown-message");
    document.getElementById("passwordError").classList.add("hidden-message");
  }
}
