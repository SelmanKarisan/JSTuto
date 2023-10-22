console.log("Welcome to Day 4 of Java Script Tutorial")

// Ternary Operatörü

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')        // koşul doğruysa
  : console.log('No need for a rain coat.')     // koşul yanlışsa

 // LEVEL 1 EXERCISES 
  let enterage = prompt('Enter your age:','age')
  let age=parseInt(enterage)
  age >= 18
  ? console.log(`You are old enough to drive.`)
  : console.log(` You are left with ${18-age} years to drive.`)


  let a = 4
  let b = 3

  if(a>b){
    console.log(`${a} is greater than ${b}`)

  }else{
    console.log(`${b} is greater than ${a}`)
  }

  a>b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(` You are left with ${18-age} years to drive.`) 


  let input = prompt('enter a number','')
  let num = parseInt(input)
  num%2==0
  ? console.log(`${num} is even.`)
  : console.log(`${num} is odd.`)


   // LEVEL 2 EXERCISES 

    let score = 75
    let letter = 0
    if(score>=80){
        letter = "A"
    }else if(score>=70){
        letter = "B"
    }else if(score>=60){
        letter = "C"
    }else if(score>=50){
        letter = "D"
    }else if(score>100){
        console.log("100 e kadar not girin")
    }else{
        letter = "D"
    }
    console.log(letter)

    // LEVEL 3 EXERCISES

    let entered_month = prompt('Enter a month name','')
    let month = entered_month.toLowerCase()

    switch (month) {
        case 'january':
            console.log(`${month} has 31 days.`)
          break
        case 'february':
            console.log(`${month} has 29 days.`)
          break
        case 'march':
            console.log(`${month} has 31 days.`)
          break
        case 'april':
         console.log(`${month} has 30 days.`)
          break
        case 'may':
            console.log(`${month} has 31 days.`)
          break
        case 'june':
            console.log(`${month} has 30 days.`)
          break
        case 'july':
            console.log(`${month} has 31 days.`)
          break
        case 'august':
            console.log(`${month} has 31 days.`)
          break
        case 'september':
          console.log(`${month} has 30 days.`)
          break
        case 'october':
          console.log(`${month} has 31 days.`)
          break 
        case 'november':
            console.log(`${month} has 30 days.`)
            break 
        case 'december':
          console.log(`${month} has 31 days.`)
          break 
        default:
          console.log('It is not a month name enter without blank')
      }
