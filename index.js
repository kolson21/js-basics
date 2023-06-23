
let name = 'Kim'
console.log(name)

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive
// Use Camel notation
// Put different variables on separate lines

// let firstName = 'Kim'
// let lastName = 'Olson'

// Use const when you don't want to reassign variable
const interestRate = 0.3
console.log(interestRate)

// let name = 'Kim' // String Literal
// let age = 30 // Number Literal
let isApproved = false // Boolean Literal
let firstName= undefined
let lastName = null // Clears the value of the variable

// Object
let person = {
    name: 'Kim',
    age: 30
}
// Dot Notation
person.name = 'Mary'
//Bracket Notation
person['name'] = 'Joan'

console.log(person.name)

// Array
let selectedColors = ['red', 'blue'] // Array Literal, empty array
selectedColors[2] = 'green'
console.log(selectedColors.length)

// Function
function greet(name) {
    console.log('Hello ' + name)
}

greet('Kim')