const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = 'bobby';
        alert(greet, name);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures - a function ran. the function executed.
// It's never going to execute again.
// BUT it's going to remember that there are references to those variable so that child scope always has access to the parent scope.


// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5);
multiplyBy5(10);
multiplyBy5(11);

// Compose
const compose = (f, g) => (a) => f(7);

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding side effects, functional purity.

// Side effect: changing outside world
// Example
let a = 1;
function b() {
    a = 2; // Side effect
}

// Functional purity
//  When you avoid side effects, and
//  We always return something
// Which makes it DETERMINISTIC
// Example
// input (5,10) -> function() -> return value

// What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.