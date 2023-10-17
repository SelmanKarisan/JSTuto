console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

let ten ='10' 

console.log(typeof(ten)== typeof(10))

let strtoint = parseFloat('9.8')

console.log(typeof(strtoint))

console.log(Math.ceil(strtoint))

let pyt ='python'
let jar ='jargon'

console.log(pyt.includes('on'))
console.log(jar.includes('on'))

let cent='I hope this course is not full of jargon.'

console.log(cent.includes("jargon"))


let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 110

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10


const min = 50;
const max = 100;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

let randomNum2 = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen2 = randomNum2 * 256

let randomNumRoundToFloor2 = Math.floor(numBtnZeroAndTen2)
console.log(randomNumRoundToFloor2)    

let randomNum3 = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen3 = randomNum * 10
let randomNumRoundToFloor3 = Math.floor(numBtnZeroAndTen3)
console.log(randomNumRoundToFloor3)


let java ='JavaScript'

console.log(java.charAt(randomNumRoundToFloor3))


let cent2='You cannot end a sentence with because because because is a conjunction'

let index=cent2.indexOf("because because because")
console.log(cent2.substr(index))



const sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const wordToCount = "love";
const cleanSentence = sentence.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, "");

// Split the sentence into words using a space as the delimiter
const words = cleanSentence.split(" ");
console.log(words)

// Initialize a counter for the word "love"
let count = 0;

// Iterate through the words and count the occurrences of the word "love"
for (const word of words) {
  console.log(word)
  if (word.toLowerCase() == wordToCount) {
    count++;
  }
}
console.log(`The word "${wordToCount}" appears ${count} times in the sentence.`);

const sentence2 = "You cannot end a sentence with because because because is a conjunction";
const wordToCount2 = "because";
const cleanSentence2 = sentence2.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, "");

// Split the sentence into words using a space as the delimiter
const words2 = cleanSentence2.split(" ");

// Initialize a counter for the word "love"
let count2 = 0;

// Iterate through the words and count the occurrences of the word "love"
for (const word2 of words2) {
  console.log(word2)
  if (word2.toLowerCase() == wordToCount2) {
    count2++;
  }
}

console.log(`The word "${wordToCount2}" appears ${count2} times in the sentence.`);

const desen = /because/gi

console.log(sentence2.match(desen))


const text = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleantext = text.replace(/[@.,\/#!$%^&*;:{}=\-_`~()]/g, "");

console.log(cleantext)


const text2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text2.match(/\d+/g); // This regex extracts all numbers in the text

// Calculate the total annual income
const monthlySalary = parseInt(numbers[0]);
const annualBonus = parseInt(numbers[1]);
const monthlyCourses = parseInt(numbers[2]);

const totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);

console.log(`The total annual income is ${totalAnnualIncome} euro.`);
