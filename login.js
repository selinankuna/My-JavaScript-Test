let names = [];
let Password = [];
let Email = [];

function SUBMIT () {
    alert("Email or Password is empty");

var names = document.getElementById("name").Value;
var password = document.getElementById("password").Value;
var Email = document.getElementById("Email").Value;


if (Password == "") {
    alert("item name cannot be empty");
    return;
} 

if (Email == 0) {
    alert("price cannot be empty 0");
    return;
}

names.push({Email: Email, Password: Password});

varname.innerHTML ="";

}