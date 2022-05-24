
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

function FriendsThomas() {
    document.getElementById("friends").style.display = "none";
    document.getElementById("logInText").style.display = "none"
    document.getElementById("logInTitle").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Thomas this is the friends tab where you can see who else is playing the game with you.<br><br><br>Oliver • 5873<br><br>Sam • 1003<br><br>Tyler • 7766<br><br>Aidan • 1080<br><br>Henry • 0001<br><br>You :)"
    document.getElementById("login").innerHTML = "<-- Back"
    document.getElementById("login").setAttribute( "onClick", "javascript: homeScreenThomas();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function FriendsOliver() {
    document.getElementById("friends").style.display = "none";
    document.getElementById("logInText").style.display = "none"
    document.getElementById("logInTitle").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Oliver this is the friends tab where you can see who else is playing the game with you.<br><br><br>Thomas • ADMIN<br><br>Sam<br><br>Tyler<br><br>Aidan<br><br>Henry<br><br>You :)"
    document.getElementById("login").innerHTML = "<-- Back"
    document.getElementById("login").setAttribute( "onClick", "javascript: homeScreenOliver();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function FriendsSam() {
    document.getElementById("friends").style.display = "none";
    document.getElementById("logInText").style.display = "none"
    document.getElementById("logInTitle").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Sam this is the friends tab where you can see who else is playing the game with you.<br><br><br>Oliver<br><br>Thomas • ADMIN<br><br>Tyler<br><br>Aidan<br><br>Henry<br><br>You :)"
    document.getElementById("login").innerHTML = "<-- Back"
    document.getElementById("login").setAttribute( "onClick", "javascript: homeScreenSam();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function FriendsTyler() {
    document.getElementById("friends").style.display = "none";
    document.getElementById("logInText").style.display = "none"
    document.getElementById("logInTitle").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Tyler this is the friends tab where you can see who else is playing the game with you.<br><br><br>Oliver<br><br>Sam<br><br>Thomas • ADMIN<br><br>Aidan<br><br>Henry<br><br>You :)"
    document.getElementById("login").innerHTML = "<-- Back"
    document.getElementById("login").setAttribute( "onClick", "javascript: homeScreenTyler();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function FriendsAidan() {
    document.getElementById("friends").style.display = "none";
    document.getElementById("logInText").style.display = "none"
    document.getElementById("logInTitle").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Aidan this is the friends tab where you can see who else is playing the game with you.<br><br><br>Oliver<br><br>Sam<br><br>Tyler<br><br>Thomas • ADMIN<br><br>Henry<br><br>You :)"
    document.getElementById("login").innerHTML = "<-- Back"
    document.getElementById("login").setAttribute( "onClick", "javascript: homeScreenAidan();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function FriendsHenry() {
    document.getElementById("friends").style.display = "none";
    document.getElementById("logInText").style.display = "none"
    document.getElementById("logInTitle").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Henry this is the friends tab where you can see who else is playing the game with you.<br><br><br>Oliver<br><br>Sam<br><br>Tyler<br><br>Aidan<br><br>Thomas • ADMIN<br><br>You :)"
    document.getElementById("login").innerHTML = "<-- Back"
    document.getElementById("login").setAttribute( "onClick", "javascript: homeScreenHenry();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}

function homeScreenThomas() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• ADMIN</i></sup>"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Thomas, you made this so i wont bore you, good day :)."
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsThomas();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Start();" );
    document.getElementById("logInText").style.display = "none"
}
function homeScreenOliver() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Oliver, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsOliver();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Start();" );
    document.getElementById("logInText").style.display = "none"
}
function homeScreenSam() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Sam, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsSam();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Start();" );
    document.getElementById("logInText").style.display = "none"
}
function homeScreenTyler() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Tyler, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsTyler();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Start();" );
    document.getElementById("logInText").style.display = "none"
}
function homeScreenAidan() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Aidan, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsAidan();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Start();" );
    document.getElementById("logInText").style.display = "none"
}
function homeScreenHenry() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Henry, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsHenry();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Start();" );
    document.getElementById("logInText").style.display = "none"
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