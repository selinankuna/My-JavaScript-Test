let Password = [];
let Email = [];

function SUBMIT () {
    // alert("Email or Password is empty");

var password = document.getElementById("password");
var email = document.getElementById("email");

if (email == "user@gmail.com" && password == "mypassword") {
    Window.location.href = "./home.html";
}


if (password == "") {
    alert("item name cannot be empty");
    return;
} 

if (email == 0) {
    alert("price cannot be empty 0");
    return;
}

// names.push({Email: Email, password: password});

// varname.innerHTML ="";

}