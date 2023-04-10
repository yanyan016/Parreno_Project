function errorCheck() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" && password == "") {
        document.getElementById("error").innerHTML = "Please enter your username and password.";
        document.getElementById("usernameError").innerHTML = "*";
        document.getElementById("passwordError").innerHTML = "*";
        console.log("Login error");
    } else if (username == "" || password == "") {
        if (username == "") {
            document.getElementById("error").innerHTML = "Please enter your username.";
            document.getElementById("usernameError").innerHTML = "*";
            document.getElementById("passwordError").innerHTML = "";
            console.log("Login error");
        } else if (password == "") {
            document.getElementById("error").innerHTML = "Please enter your password.";
            document.getElementById("passwordError").innerHTML = "*";
            document.getElementById("usernameError").innerHTML = "";
            console.log("Login error");
        }
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("usernameError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";
    }
}