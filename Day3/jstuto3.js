console.log("Welcome to Day3");






const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)


const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true


const simdi = new Date()
const year = simdi.getFullYear() // return year
const month = simdi.getMonth() + 1 // return month(0 - 11)
const date = simdi.getDate() // return date (1 - 31)
const hours = simdi.getHours() // return number (0 - 23)
const minutes = simdi.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

let firstName= "ahmet";
let lastName="karisan";
let country="turkey";
let city="istanbul";
let age = 20
let isMarried=false;


let firstName2
console.log(firstName2)

let empty = null
console.log(empty)

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo // toplama
let diff = numOne - numTwo // çıkarma
let mult = numOne * numTwo // çarpma
let div = numOne / numTwo // bölme
let remainder = numOne % numTwo // kalanı bulma (bölmedeki kalan oluyor bu Biraz matematik :D )
let powerOf = numOne ** numTwo // buda üstel sayı anlamına geliyor Örnek: 4 Üssü 3 Kaçtır? Biraz matematik 2 :D 
console.log(sum, diff, mult, div, remainder, powerOf)


console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, eşit değil
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

// if else usage with ? : 
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

// alert('Welcome to 30DaysOfJavaScript')

/*
let number = prompt('Enter number', 'number goes here')
console.log(number)


const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
*/