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