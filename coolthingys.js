function logIn() {
    if (document.getElementById("username").value === "test") {
        if (document.getElementById("password").value === "54465") {
            document.getElementById("logInText").innerHTML = "Answer"
            document.getElementById("logInTitle").style.display = "none"
            document.getElementById("logInPara").innerHTML = "..."
            document.getElementById("password").style.display = "none"
            document.getElementById("username").style.placeholder = "Answere:"
            document.getElementById("username").value = ""
            document.getElementById("login").innerHTML = "Check"
        }
        else {
            document.getElementById("logInText").innerHTML = "Wrong Password"
        }
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong Username"
    }
}