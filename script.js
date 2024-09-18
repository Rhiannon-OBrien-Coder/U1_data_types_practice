/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */

const myFavoriteSong = "Pink Pony Club"

console.log(`My favorite song is ${myFavoriteSong}`)

/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */

const myName = "Rhiannon"
let myLocation = "Kansas City"
let myAge = 25

console.log(`My name is ${myName} and I am ${myAge} years old. I am based out of ${myLocation}.`)
/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let theAge = 25
console.log(theAge + 10)
console.log(theAge - 10)
console.log(theAge * 2)
console.log(theAge / 2)
console.log(theAge % 3)

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */

const firstName = "Rhiannon"
const lastName = "O'Brien"
const fullName = firstName + " " + lastName

console.log(`Hello, my name is ${fullName}`)

/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array
//referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift for the array methods used below

const movies = ["star wars", "avengers"]
console.log(movies[1])
movies.unshift("dumbo")
movies.push("the incredibles")
movies.splice(1, 0, "encanto")
console.log(movies)

/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];
console.log(array1[2])
console.log(array2[1][1])
console.log(array3[1][1][1][0])
/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
let length = array4.length - 2
console.log(array4[length])
/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

thom = thom.toSpliced(0, 1, 'Tom')
console.log(thom)

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

karolin[1] = karolin[1] + 1
console.log(karolin)

// Change Cathleen's hometown from New York to "Gotham City".

cathleen.pop()
cathleen.push("Gotham City")
console.log(cathleen)
// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

kristyn.pop()
kristyn.push("Oakland")
console.log(kristyn)

//referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift for the array methods used above

