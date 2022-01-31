function submit() {

var password = document.getElementById("password").value;
var email = document.getElementById("email").value;

    if (email = "user@gmail.com" && password == "mypassword") {
    window.location.href = "home.html";
}
else {
    alert("item name cannot be empty");
    return;
}
}
