"use strict";
//1
function myfunction(){
    var a=10;
    if (a>5){
        var a =20;
        console.log(a);
    }
    console.log(a);
}
myfunction()

//2
function myfunction(){
    let A=10;
    if (a>5){
        let a =20;
        console.log(a);
    }
    console.log(a);
}
myfunction()

//3
var a=[1,"aaa"];
console.log(typeof a);
//4
var b;
console.log(typeof b);
//5
var c=
console.log(typeof c);



//6

let hasdriverslicense=false;
const passtest=true;
if (passtest){
    hasdriverlicense=true;
}
if(hasdriverslicense){
    console.log("I am a driver.");
}

//7
var private=10;
console.log(private);//global variable

//8
let array1=[1,2,3,"mansa"];
array1.push(20); //gets add at the end of the array
console.log(array1);

array1.pop();
console.log(array1);

array1.unshift(0);
console.log(array1);

array1.shift();
console.log(array1);

//9
var a=array1.indexOf("mansa");
console.log(a);
//same
console.log(array1.indexOf("mansa"));
//
console.log(array1.indexOf("4"));
//
console.log(array1.includes("mansa"));
//
alert(array1.includes("7"));

//10
let firstName="Dipika";
let lastName="K.C.";
let age=18;
let group="L4CG7";
//concatenation
console.log(
    "My first name is "+firstName+" and my last name is "+lastName
    );
//string literal
console.log(
    `My first name is ${firstName}
    and 
    my last name is
    ${lastName}
    `)
//
console.log(
    `My first name is ${firstName} and my last name is ${lastName}. My age is ${age}. I am in group ${group}`)
