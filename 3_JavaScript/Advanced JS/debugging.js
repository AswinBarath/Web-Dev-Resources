// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     (a, b) => a.concat(b), []);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        // console.log('array', array);
        // console.log('accumulator', accumulator);
        debugger;
        return accumulator.concat(array)
}, []);

// [0, 1, 2, 3, 4, 5]

// Moral of the story:
// Use debugger and javascript console to understand the code