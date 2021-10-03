// 1. Array method: .flat()
const array = [1,[2,3],[4,5]]
array.flat()
// [1, 2, 3, 4, 5]

const array2 = [1,2,[3,4,[5]]]
array2.flat()
// [1, 2, 3, 4, Array(1)]

// Specify how many layers to flatten
// default is one
const array3 = [1,2,[3,4,[5]]]
array3.flat(2)
// [1, 2, 3, 4, 5]

const entries = ['bob', 'sally',,,,,,,,,,,,'cindy']
entries.flat()
// ["bob", "sally", "cindy"]

// 2. Array method: .flatMap()
// flatMap allows us to use the basic map function and then flattens the result to a depth of one
const array3 = [1,2,[3,4,[5]]]
const array4 = array3.flatMap(num => num+'hi')
// ["1hi", "2hi", "3,4,5hi"]

const userEmail1 = '          eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail            '
console.log(userEmail1.trimStart())
console.log(userEmail2.trimEnd())
// eddytheeagle@gmail.com
// jonnydangerous@gmail

// 3. Array method: fromEntries
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

Object.fromEntries(userProfiles)
// {commanderTom: 23, derekZlander: 40, hansel: 18}

// .entries VS .fromEntries
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

const obj = Object.fromEntries(userProfiles)
Object.entries(obj)
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["commanderTom", 23]
// 1: (2) ["derekZlander", 40]

// Update to a feature - try catch block
try {
    bob + 'hi'
} catch { // No need of the error parameter (optional)
    console.log('you messed up', error)
}


// Before
try {
    bob + 'hi'
} catch (error){
    console.log('you messed up', error)
}
