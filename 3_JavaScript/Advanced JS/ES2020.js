// ES2020!
// BigInt
// Nullish coalescing operator - ??
// Optional chaining operator - ?.

// typeof 4
// "number"
// typeof true
// "boolean"
// typeof 8032475687234508734658734160914560487534504256
// "number"

// 1.    BigInt:
typeof 4n
"bigint"
// MAX_SAFE_INTEGER ~9 quadrillion
// BigInt solves this problem
// Number.MAX_SAFE_INTEGER
// 9007199254740991

// Calculations break more than this number:
// 9007199254740991 + 10
// 9007199254741000
// 9007199254741000 - 1
// 9007199254741000

// Convert to bigint using n 'suffix'
// 9007199254741000n - 1n
// 9007199254740999n


// 2.    Optional chaining operator:
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let weight = will_pokemon.pikachu.weight
console.log('weight:', weight)

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
}

if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
    let weight2 = andrei_pokemon.pikachu.weight
    console.log('weight:', weight2)
} else {
    let weight2 = undefined;
    console.log('weight:', weight2)
}

// Optional chaining operator:
let weight3 = andrei_pokemon?.pickachu?.weight
console.log('weight:', weight3)


// 3.   Nullish coalescing operator - ??

let andrei_pokemon = {
    pickachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 'lightning'
    }
}

let power = andrei_pokemon?.pickachu?.power ?? 'no power'
console.log(power)

// What if we need to check property exist