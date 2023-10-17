/* 
Now, let us see what exactly primitive and non-primitive data types mean. 
Primitive data types are immutable(non-modifiable) data types. 
Once a primitive data type is created we cannot modify it.*/

let word = 'JavaScript'

let nums = [1, 2, 3]
console.log(nums[0]);
nums[0] = 10
console.log(nums[0]);


console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break










let challenge = '30 Days Of JavaScript'
console.log(challenge);
console.log(challenge.length);

challenge = challenge.toUpperCase();
console.log(challenge)

challenge=challenge.toLowerCase();
console.log(challenge)





console.log(challenge.substring(3,))

console.log(challenge.includes("script"))

let arra = [challenge.split(" ")]
console.log(arra)

let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let strarray = [str.split(",")]
for(i=0;i<7;i++){
    console.log(strarray[i]);
    console.log("\n")
}

challenge=challenge.replace("javascript","Python")
console.log(challenge)


challenge = "30 Days Of JavaScript"
console.log(challenge.charAt(15))   
console.log(challenge.charCodeAt("J")) 

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

const parag='You cannot end a sentence with because because because is a conjunction';

console.log(parag.indexOf("because"))

console.log(parag.lastIndexOf("because"))

console.log(parag.search("because"))


let yazi =  ' 30 Days Of JavaScript '
console.log(yazi)
yazi =yazi.trim()
console.log(yazi)

console.log(yazi.startsWith('3'))
console.log(yazi.endsWith('t'))
console.log(yazi.match('a'))

let str1 ='30 Days of'
let str2 ='JavaScript'

let realstr = str1.concat(str2)
console.log(realstr);
console.log(realstr.repeat(2))
