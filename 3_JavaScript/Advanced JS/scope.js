// Scope

// Root scope(window)
var fun = 5;

function funFunction() {
    // child scope
    var fun = "hello";
    console.log(1, fun)
}

function funerFunction() {
    // child scope
    var fun = "byeee";
    console.log(2, fun)
}

function funestFunction() {
    // child scope
    fun = "AHHHH";
    console.log(3, fun)
}

console.log("window", fun);
funFunction()
funerFunction()
funestFunction()