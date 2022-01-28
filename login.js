function SUBMIT () {

var password = document.getElementById("password").value;
var email = document.getElementById("email").value;

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

display.innerHTML ="";

}
