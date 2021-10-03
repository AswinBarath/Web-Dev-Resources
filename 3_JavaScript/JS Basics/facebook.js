var database = [
    {
    username: "Aswin",
    password: "secret"
	},
    {
    username: "Barath",
    password: "supersecret"
    },
    {
    username: "Sriram",
    password: "secretsecret"
    }
]

var newsfeed = [
    {
        username: "Andrei",
        timeline: "Helping out students"
    },
    {
        username: "Ashwin",
        timeline: "Learning"
    },
    {
        username: "Barath",
        timeline: "Binge watching"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for(var i=0; i < database.length; i++) {
        if(database[i].username === username &&
            database[i].password === password) {
            return true;    
        }
    }
    return false;
}

function signIn(user, pass) {
    if(isUserValid(user, pass)){
        console.log(newsfeed);
    } else {
        alert("Sorry, Wrong username and password")
    }
}

signIn(userNamePrompt, passwordPrompt)
