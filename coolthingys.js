
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
            alert('YOU HAVE BEEN BANNED')
        }
        else {
            document.getElementById("logInText").innerHTML = "Wrong Password"
        }
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong Username"
    }
}

//game 1
function Game1Check() {
    if (document.getElementById("username").value === "echo") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Echo") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "echos") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Echos") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "an echo") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "An echo") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game1 () {
    document.getElementById("login").setAttribute( "onclick", "Game1Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInTitle").innerHTML = "1"
    document.getElementById("logInPara").innerHTML = "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? "
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. Alexa'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game2()" )
    
}
// Game 1

// Game 2
function Game2Check() {
    if (document.getElementById("username").value === "towel") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Towel") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game2 () {

    document.getElementById("login").setAttribute( "onclick", "Game2Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInText").style.color = "black"
    document.getElementById("logInTitle").innerHTML = "2"
    document.getElementById("logInPara").innerHTML = "What gets wet while drying?"
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. bathroom'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game3()" )
    document.getElementById("next").style.display = "none"
    
}
// Game 2

// Game 3
function Game3Check() {
    if (document.getElementById("username").value === "dark") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Dark") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "darkness") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Darkness") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game3 () {

    document.getElementById("login").setAttribute( "onclick", "Game3Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInText").style.color = "black"
    document.getElementById("logInTitle").innerHTML = "3"
    document.getElementById("logInPara").innerHTML = "The more of this there is, the less you see. What is it?"
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. ahhhhhh scary!!!'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game4()" )
    document.getElementById("next").style.display = "none"
    
}
// Game 3

// Game 4
function Game4Check() {
    if (document.getElementById("username").value === "egg") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Egg") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game4 () {

    document.getElementById("login").setAttribute( "onclick", "Game4Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInText").style.color = "black"
    document.getElementById("logInTitle").innerHTML = "4"
    document.getElementById("logInPara").innerHTML = "What has to be broken before you can use it?"
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. cooking'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game5()" )
    document.getElementById("next").style.display = "none"
    
}
// Game 4

// Game 5
function Game5Check() {
    if (document.getElementById("username").value === "candel") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Candel") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game5 () {

    document.getElementById("login").setAttribute( "onclick", "Game5Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInText").style.color = "black"
    document.getElementById("logInTitle").innerHTML = "5"
    document.getElementById("logInPara").innerHTML = "I’m tall when I’m young, and I’m short when I’m old. What am I?"
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. i can be scented'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game6()" )
    document.getElementById("next").style.display = "none"
    
}
// Game 5

// Game 6
function Game6Check() {
    if (document.getElementById("username").value === "all") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "All") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game6 () {

    document.getElementById("login").setAttribute( "onclick", "Game6Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInText").style.color = "black"
    document.getElementById("logInTitle").innerHTML = "6"
    document.getElementById("logInPara").innerHTML = "What month of the year has 28 days?"
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. write the answere in one word'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game7()" )
    document.getElementById("next").style.display = "none"
    
}
// Game 6

// Game 7
function Game7Check() {
    if (document.getElementById("username").value === "sponge") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Sponge") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game7 () {

    document.getElementById("login").setAttribute( "onclick", "Game7Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInText").style.color = "black"
    document.getElementById("logInTitle").innerHTML = "7"
    document.getElementById("logInPara").innerHTML = "What is full of holes but still holds water?"
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. Bob léponge'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game8()" )
    document.getElementById("next").style.display = "none"
    
}
// Game 7

// Game 8
function Game8Check() {
    if (document.getElementById("username").value === "future") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Future") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game8 () {

    document.getElementById("login").setAttribute( "onclick", "Game8Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInText").style.color = "black"
    document.getElementById("logInTitle").innerHTML = "8"
    document.getElementById("logInPara").innerHTML = "What is always in front of you but can’t be seen?"
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. Sci-fi'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game9()" )
    document.getElementById("next").style.display = "none"
    
}
// Game 8

// Game 9
function Game9Check() {
    if (document.getElementById("username").value === "promise") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Promise") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game9 () {

    document.getElementById("login").setAttribute( "onclick", "Game9Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInText").style.color = "black"
    document.getElementById("logInTitle").innerHTML = "9"
    document.getElementById("logInPara").innerHTML = "What can you break, even if you never pick it up or touch it?"
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. uhhhhh idk what to put as a hint for this so good morning :)'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game10()" )
    document.getElementById("next").style.display = "none"
    
}
// Game 9

// Game 10
function Game10Check() {
    if (document.getElementById("username").value === "age") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else if (document.getElementById("username").value === "Age") {
        document.getElementById("logInText").innerHTML = "Correct!"
        document.getElementById("logInText").style.color = "green"
        document.getElementById("next").style.display = "block"
    }
    else {
        document.getElementById("logInText").innerHTML = "Wrong!"
        document.getElementById("logInText").style.color = "red"
    }
}

function Game10 () {

    document.getElementById("login").setAttribute( "onclick", "Game10Check()" )
    document.getElementById("logInText").style.display = "block"
    document.getElementById("logInHR").style.display = "block"
    document.getElementById("hint").style.display = "block"
    document.getElementById("logInText").innerHTML = "What Do You Think?"
    document.getElementById("logInText").style.color = "black"
    document.getElementById("logInTitle").innerHTML = "10"
    document.getElementById("logInPara").innerHTML = "What goes up but never comes down?"
    document.getElementById("password").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("username").style.display = "block"
    document.getElementById("username").setAttribute( "placeholder", "Answer:" )
    document.getElementById("hint").setAttribute( "onclick", "document.getElementById('logInText').innerHTML = 'Hint. you want more when your young and less when older'" )
    document.getElementById("username").value = ""
    document.getElementById("login").innerHTML = "Check"
    document.getElementById("next").setAttribute( "onclick", "Game11()" )
    document.getElementById("next").style.display = "none"
    
}
// Game 10

function FriendsThomas() {
    document.getElementById("friends").style.display = "none"
    document.getElementById("check").style.display = "none"
    document.getElementById("start").style.display = "none"
    document.getElementById("logInText").style.display = "none"
    document.getElementById("logInTitle").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Thomas this is the friends tab where you can see who else is playing the game with you.<br><br><br>Oliver • 5873<br><br>Sam • 1003<br><br>Tyler • 7766<br><br>Aidan • 1080<br><br>Henry • 0001<br><br>You :)"
    document.getElementById("login").innerHTML = "<-- Back"
    document.getElementById("login").setAttribute( "onClick", "javascript: homeScreenThomas();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Game1();" )
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
}
function FriendsOliver() {
    document.getElementById("friends").style.display = "none"
    document.getElementById("check").style.display = "none"
    document.getElementById("start").style.display = "none"
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
    document.getElementById("friends").style.display = "none"
    document.getElementById("check").style.display = "none"
    document.getElementById("start").style.display = "none"
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
    document.getElementById("friends").style.display = "none"
    document.getElementById("check").style.display = "none"
    document.getElementById("start").style.display = "none"
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
    document.getElementById("friends").style.display = "none"
    document.getElementById("check").style.display = "none"
    document.getElementById("start").style.display = "none"
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
    document.getElementById("friends").style.display = "none"
    document.getElementById("check").style.display = "none"
    document.getElementById("start").style.display = "none"
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
    document.getElementById("check").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Thomas, you made this so i wont bore you, good day :)."
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsThomas();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Game1();" );
    document.getElementById("logInText").style.display = "none"
    document.getElementById("body").style.color = "#A0E6FF"
}
function homeScreenOliver() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("check").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Oliver, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsOliver();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Game1();" );
    document.getElementById("logInText").style.display = "none"
    document.getElementById("body").style.color = "#FF404C"
}
function homeScreenSam() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("check").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Sam, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsSam();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Game1();" );
    document.getElementById("logInText").style.display = "none"
    document.getElementById("body").style.color = ""
}
function homeScreenTyler() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("check").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Tyler, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsTyler();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Game1();" );
    document.getElementById("logInText").style.display = "none"
    document.getElementById("body").style.color = ""
}
function homeScreenAidan() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("check").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Aidan, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsAidan();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Game1();" );
    document.getElementById("logInText").style.display = "none"
    document.getElementById("body").style.color = ""
}
function homeScreenHenry() {
        
    document.getElementById("logInTitle").innerHTML = "Home ⠀<sup><i>• Player</i></sup>"
    document.getElementById("check").style.display = "none"
    document.getElementById("logInHR").style.display = "none"
    document.getElementById("logInPara").innerHTML = "Welcome Henry, to begin press (start), to view who else is in the game press (Friends), and press sign out to go back best of luck Agilian-"
    document.getElementById("login").innerHTML = "<-- Sign Out"
    document.getElementById("login").setAttribute( "onClick", "javascript: titleScreen();" );
    document.getElementById("password").style.display = "none"
    document.getElementById("username").style.display = "none"
    document.getElementById("friends").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("friends").setAttribute( "onClick", "javascript: FriendsHenry();" );
    document.getElementById("start").setAttribute( "onClick", "javascript: Game1();" );
    document.getElementById("logInText").style.display = "none"
    document.getElementById("body").style.color = "#391285"
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