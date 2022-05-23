function logIn() {
    if (document.getElementById("username").value === "Thomas") {
        if (document.getElementById("password").value === "9999") {
            homeScreenThomas()
        }
        else {
            document.getElementById("logInText").innerHTML = "Wrong Password"
        }
    }
    else if (document.getElementById("username").value === "Oliver") {
        if (document.getElementById("password").value === "5873") {
            homeScreenOliver()
        }
        else {
            document.getElementById("logInText").innerHTML = "Wrong Password"
        }
    }
    else if (document.getElementById("username").value === "Sam") {
        if (document.getElementById("password").value === "1003") {
            homeScreenSam()
        }
        else {
            document.getElementById("logInText").innerHTML = "Wrong Password"
        }
    }
    else if (document.getElementById("username").value === "Tyler") {
        if (document.getElementById("password").value === "7766") {
            homeScreenTyler()
        }
        else {
            document.getElementById("logInText").innerHTML = "Wrong Password"
        }
    }
    else if (document.getElementById("username").value === "Aidan") {
        if (document.getElementById("password").value === "1080") {
            homeScreenAidan()
        }
        else {
            document.getElementById("logInText").innerHTML = "Wrong Password"
        }
    }
    else if (document.getElementById("username").value === "Henry") {
        if (document.getElementById("password").value === "0001") {
            homeScreenHenry()
        }
        else {
            document.getElementById("logInText").innerHTML = "Wrong Password"
        }
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong Username"
    }
}

function homeScreenThomas() {
        
    document.getElementById("logInTitle").innerHTML = "Home"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Thomas, you made this so i wont bore you, good day :). (Oliver 5873. Sam 1003. Tyler 7766. Aidon 1080. Henry 0001)"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function homeScreenOliver() {
        
    document.getElementById("logInTitle").innerHTML = "Home"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Oliver, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of lack Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function homeScreenSam() {
        
    document.getElementById("logInTitle").innerHTML = "Home"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Sam, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of lack Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function homeScreenTyler() {
        
    document.getElementById("logInTitle").innerHTML = "Home"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Tyler, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of lack Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function homeScreenAidan() {
        
    document.getElementById("logInTitle").innerHTML = "Home"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Aidan, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of lack Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function homeScreenHenry() {
        
    document.getElementById("logInTitle").innerHTML = "Home"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Henry, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of lack Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}

function blankSlateWithInput() {
    document.getElementById("logInText").innerHTML = "Answer"
    document.getElementById("logInTitle").style.display = "none"
    document.getElementById("logInPara").innerHTML = "..."
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.placeholder = "Answere:"
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
}
function blankSlate() {
    document.getElementById("logInText").style.display = "none"
    document.getElementById("logInTitle").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "..."
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}

function titleScreen() {
    location.reload();
}