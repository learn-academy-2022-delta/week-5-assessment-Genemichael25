// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("coded", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () =>{
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(coded(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(coded(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(coded(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// ReferenceError: coded is not defined     
        
// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function called coded
// Set a parameter of string
// Use .split to take string and convert to an array
// Iterate over the array using .map 
// Use conditional statements to change values 
// .join the array


const coded = (string) => {
    let newArray = string.split("")
    return newArray.map(letter => {
            if(letter === "a" || letter === "A") {
                 return 4
            }else if(letter === "e" || letter === "E") {
                return 3
            }else if(letter === "i" || letter === "I") {
                return 1
            }else if(letter === "o"|| letter === "O") {
                return 0 
            }else
                return letter
        })
        .join("")
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// console.log(coded(secretCodeWord1))

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("letter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () =>{
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
            expect(letter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
            expect(letter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
        })
    })
    
//  ReferenceError: letter is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function of letter
// Set parameter to take in an array and a letter
// Use .filter to return values that include a certain letter
    // .toLowerCase to account for any capital letter we want to filter

const letter = (array, letter) => {
    return array.filter(value => value.toLowerCase().includes(letter))
}
// console.log(letter(fruitArray, letterA))
// console.log(letter(fruitArray, letterE))

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'.", () =>{
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    })
})

// ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function called fullHouse
// Set parameter of array
// Use .sort to get all similar values grouped
// Set a conditional statement to check if the first 3 values are the same, and the last 2 are a pair to return true
    // Also vice versa, first 2 are a pair, last 3 are the same

const fullHouse = (array) => {
    array.sort((a,b) => a-b)
        if(array[0] === array[1] && array[0] === array[2] && array[3] === array[4]){
            return true
        }else if(array[0] === array[1] && array[2] === array[3] && array[2] === array[4]){
             return true
        } else {
            return false
        }
    }
        
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// console.log(fullHouse(hand1))

