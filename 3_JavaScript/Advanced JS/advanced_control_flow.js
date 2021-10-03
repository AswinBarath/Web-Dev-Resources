// Ternary operator
// condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = 
    "Your account # is " + (isUserValid(false) ? "1234" : "not available");

function condition() {
    if(isUserValid(true)) {
        return "You may enter";
    }
    else {
        return "Access Denied";
    }
}

var answer2 = condition();

// Switch operator
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
            break;
    }
    return whatHappens;
}