fs = require('fs');

function phoneNumber(err, data) {
    console.log('Data:', data)
}

fs.readdir('c:/', phoneNumber);

console.log("this comes after")