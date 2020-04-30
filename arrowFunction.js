// Normal function
function sum(a, b) {
    return a + b
}

// Arrow function
let sumA = (a, b) => a + b

// Normal function
function isPositive(number) {
    return number >= 0
}

// Arrow function
let isPositiveA = number => number >= 0

// Normal function
function randomNumber() {
    return Math.random
}

// Arrow function
let randomNumberA = () => Math.random

// Normal function
document.addEventListener('click', function() {
    console.log('click')
})

// Arrow function
document.addEventListener('click', () => console.log('click'))


// An example
class Person {
    
}