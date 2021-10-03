// let + const
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel)
}
console.log('outside', wizardLevel)


// Destructuring
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}
const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;


// Object properties
const name = 'john snow';
const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}

const a = "Simon";
const b = true;
const c = {};

const obj = {
    a: a,
    b: b,
    c: c
}
// or use the following technique:
const obj = {
    a,
    b,
    c
}


// Template strings
const name = "Sally"
const age = 34;
const pet = "horse";
// const greeting = "Hello " + name + " you\'' seem to be doing " + greeting + "!"
// or use template strings:
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;


// default arguements
function greet(name='', age=30, pet='cat') {
    return  `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}
greet()


// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
// > sym2 === sym3
// < false


// arrow functions

function add(a, b) {
    return a + b;
}
// or use arrow functions:
const add2 = (a, b) => a + b;
