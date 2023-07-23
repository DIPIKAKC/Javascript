"use strict";
//falsy values
//false,null,"",undefined ,0
//and-&&, or-||


//Nested if else
let guessnumber=18;
let userguess=+prompt("guess a number"); //prompt takes input in string //+ changes str to int
if (userguess==guessnumber){
    console.log("your guess is right:)")
}else{
    if(userguess<guessnumber){
        console.log("too low")
    }else{
        console.log("too high")
    }
}


//switch statement
let day=1;

switch(day){ //to tract the value in day
    case 0:
        console.log("Saturday")
        break; // to stop after a case is met
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Working days")
        break;
}


// while loop -declares variable at the starting
let i=0;

while (i<=2){
    console.log(i);
    i++;
}
//eg:
let num=10;
let tpt=0;
let i=0;

while(i<=6){
    tpt+=i;
    i++;
}
console.log(tpt);

// for loop - declares variables inside the loop
//0-9
for (let i=0;i<=9;i++){
    console.log(i);
}
//sum of first n nat numbers
let total=0;
let n=10;

for(let i=1;i<=n;i++){
    total+=i
}
console.log(total)

//break-if a condition is met the loop stops&code outside of the loop executes
for (let i=0;i<=9;i++){
    if(i==4){
        break;
    }
    console.log(i);
}
console.log("finished")

//continue- the condition line doesnot print and the loop continues after skipping it
for (let i=0;i<=9;i++){
    if(i==4){
        continue;
    }
    console.log(i);
}
console.log("finished")


//Do while loop -execute do loop until while is true
let i=-2
do{
    console.log(i);
    i++;
}while(i<=2);
console.log("value of i is",i)


//Intro to arrays(reference type)
//ordered collection of items,object
let cartoons=[["doraemon","hattori"],"sinchan","kishna",1,2,3];
let mix=[1,2,"dipika",null,undefined]
console.log(cartoons)
console.log(mix)
console.log(cartoons[1])
console.log(cartoons[0][1])

//typecheck
let mmix=[1,2,"dipika",null,undefined]
let obj={};//object literal
console.log(typeof mmix)
console.log(typeof obj)
console.log(Array.isArray(mmix)) //to check if "mmix" is a array or not
console.log(Array.isArray(obj))


//primitive vs reference data types
//primitive type -stores in stack and  every assigned values has its own space which doesnot affect other elements
let n1=6;
let n2=n1;
console.log("value of n1 is",n1)
console.log("value of n2 is",n2)
n1++;
console.log("after increment of i:")
console.log("value of n1 is",n1)
console.log("value of n2 is",n2)

//reference type -shares same space and values
let arr1=[1,2];
let arr2=arr1;
console.log("arr1 is",arr1)
console.log("arr2 is",arr2)
arr1.push(3);
console.log("after pushing 3 to arr1:")
console.log("arr1 is",arr1)
console.log("arr2 is",arr2)