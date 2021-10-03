// 1. Normal for loop  2. forEach
// Two other ways to loop: 1. for of    2. for in
const basket = ['apples', 'oranges', 'grapes'];
// 1
for ( let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// 2
basket.forEach(item => {
    console,log(item);
})

// for of
// Iterating - arrays, strings
for (item of basket) {
    console.log(item)
}

const detailedObject = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
// for in - properties
// enumerating - objects
for (item in detailedObject) {
    console.log(item);
}

// enumerating arrays:-
const basket = ['apples', 'oranges', 'grapes'];
for (item in basket) {
    console.log(item);
}
// 0
// 1
// 2

// because arrays are objects like this:
// basket = {
//     0: 'apples',
//     1: 'oranges',
//     2: 'grapes'
// }

