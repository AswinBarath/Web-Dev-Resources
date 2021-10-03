// 1. String padding:
// .padStart()
// .padEnd()

console.log('turtle'.padStart(10));
// This will add 10 "total" spaces used including the string
console.log('turtle'.padEnd(10));

// 2. Trailing commas in function's parameter, lists and calls
const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,)
// Added comma at the end
// Why useful: This reads well in new lines and in GitHub the difference will be neatly displayed in green and red
// const fun = (a,
//              b,
//              c,
//              d,
//              ) => {
//     console.log(a);
// }

// 3. Object.values
//    Object.entries
let obj = {
    username0: 'Santa',
    usrename1: 'Rudolf',
    username2: 'Mr.Grinch'
}

// Before this we had: 
   Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
// username0 Santa
// usrename1 Rudolf
// username2 Mr.Grinch

Object.values(obj).forEach(value => {
    console.log(value);
})
// Santa
// Rudolf
// Mr.Grinch

Object.entries(obj).forEach(value => {
    console.log(value);
})
// ["username0", "Santa"]
// ["usrename1", "Rudolf"]
// ["username2", "Mr.Grinch"]

let new_list = Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
console.log(new_list);
// ["Santa0", "Rudolfusrename1", "Mr.Grinch2"]