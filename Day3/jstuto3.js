console.log("Welcome to Day3");


// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo // toplama
let diff = numOne - numTwo // çıkarma
let mult = numOne * numTwo // çarpma
let div = numOne / numTwo // bölme
let remainder = numOne % numTwo // kalanı bulma (bölmedeki kalan oluyor bu Biraz matematik :D )
let powerOf = numOne ** numTwo // buda ustel sayı anlamına geliyor Örnek: 4 ussu 3 Kaçtır? Biraz matematik 2 :D 
console.log(sum, diff, mult, div, remainder, powerOf)


console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, esit degil
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


const now = new Date()
console.log(now)
console.log(now.getDate())

console.log(now.getTime())// çıktı farklı olacaktır , 1 Ocak 1970 den kullandıgınız zaman arasındaki sureyi milisaniye cinsinden verecektir.


const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true


const simdi = new Date()
const year2 = simdi.getFullYear() // return year
const month = simdi.getMonth() + 1 // return month(0 - 11)
const date = simdi.getDate() // return date (1 - 31)
const hours = simdi.getHours() // return number (0 - 23)
const minutes = simdi.getMinutes() // return number (0 -59)

// Examples 1


var firstName = "John";
var lastName = "Doe";
var country = "USA";
var city = "New York";
var age = 30;
var isMarried = false;
var year = 2023;

// Degiskenlerin veri turunu kontrol etme
console.log("firstName degiskeni veri turu: " + typeof firstName);
console.log("lastName degiskeni veri turu: " + typeof lastName);
console.log("country degiskeni veri turu: " + typeof country);
console.log("city degiskeni veri turu: " + typeof city);
console.log("age degiskeni veri turu: " + typeof age);
console.log("isMarried degiskeni veri turu: " + typeof isMarried);
console.log("year degiskeni veri turu: " + typeof year);

console.log(typeof('10')==typeof(10))
console.log(parseInt('9.8')==10)

console.log(10==10)
console.log(null==null)
console.log(5!=10)

console.log(10!=10)
console.log(null!=null)
console.log(5==10)

console.log("\n")
console.log("\n")

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 === '4')
console.log(4 == '4')

let py = "Python";
let jargon ="jargon"; 
console.log(py.length == jargon.length)


const time = new Date()
console.log(time.getFullYear())
console.log(time.getMonth())
console.log( time.toDateString())
console.log(time.getDay())
console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getTime())


// LEVEL 2 

let number = prompt('Enter number', 'enter base')
console.log(number)
let height = prompt('Enter number', 'enter height')
console.log(height)

console.log("The area of the triangle is "+(number*height*0.5))

let a = prompt('enter a','enter a')
let b = prompt('enter b','enter b')
let c = prompt('enter c','enter c')

let cevre= parseInt(a)+ parseInt(b)+ parseInt(b);
console.log(cevre)

let length = prompt('Enter number', 'enter length')

let width = prompt('Enter number', 'enter width')

console.log(2*(parseInt(length) + parseInt(width)))

for (var i = -10; i < 10; i++) {
  y = i*i + 6*i + 9
 if(y==0){
  console.log(i)
 }
}

let hour = prompt('enter hour',' hour')
let rate = prompt('rate per hour','rate')

console.log("Your weekly earning is "+(parseInt(hour)*parseInt(rate)*7))

const tarih =  new Date()

var yil=tarih.getFullYear()
var ay=tarih.getMonth()+1
var gun=tarih.getDate()
var saat=tarih.getHours()
var min=tarih.getMinutes()

// LEVEL 3 
if((saat && min)<10){
  saat="0"+saat
  min="0"+min
}

console.log(yil+"-"+ay+"-"+gun+" "+saat+":"+min)

