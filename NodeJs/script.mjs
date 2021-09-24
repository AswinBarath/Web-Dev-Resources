// ( Old way ) CommonJS syntax:-
// const script2 = require('./script2.js')
// console.log(3 + 4 + script2.largeNumber);

import { largeNumber } from './script2.mjs';

const a = 3;
const b = 4;
console.log(3 + 4 + largeNumber);

// setTimeout(() => {
//     console.log(3 + 4);
// }, 3000)