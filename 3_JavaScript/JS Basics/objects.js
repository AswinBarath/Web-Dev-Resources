// An object
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells:["abrakadabra", "shazam", "boo"],
    // Method
    shout: function() {
        console.log("AHHHHH!");
    }
}

// Array of objects:
var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
]

var emptyObj = {}

var nullObj = null;

// Exercise: Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user1 = {
    username: "Aswin barath",
    password: "secret"
};

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [user1];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
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
