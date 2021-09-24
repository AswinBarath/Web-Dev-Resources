import fs from 'fs';

console.time('Timer')

fs.readFile('./hello.txt', (err, data) => {
    if(err) {
        console.log('error!!!');
    }
    console.log('Async', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

fs.appendFile('./hello.txt', ' This is so cool!', err => {
    if(err) {
        console.log(err);
    }
})

fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if(err) {
        console.log(err)
    }
})

fs.unlink('./bye.txt', err => {
    if(err) {
        console.log(err);
    }
    console.log('Inception')
})

console.timeEnd('Timer')