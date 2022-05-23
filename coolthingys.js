function logIn() {
    if (document.getElementById("username").value === "Agilian") {
        if (document.getElementById("password").value === "54465") {
            
        }
        else {
            document.getElementById("logInText").innerHTML = "Wrong Password"
        }
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong Username"
    }
}