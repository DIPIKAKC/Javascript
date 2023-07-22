"use strict";
//1 trim
const myname="   dipika   ";
console.log(myname.length);
const newname=myname.trim();
console.log(newname);

// 2 to uppercase
const name="dipika";
console.log(name.toUpperCase());
//3 to lowercase
const n="dipIKA";
console.log(name.toLowerCase());

//4 slicing
//start index- kata bata start garne
//end index- kata bata end garnne
const a="dipika";
let b=a.slice(0,4);
console.log(b);

//5 
//convert number to string
let age=19;
age=String(age);
console.log(typeof age)
//convert string to number
let d="fipika";
d=Number(d);
console.log(typeof d);

//6
const o="dipika"
const l="kc"
const t=o+" "+l;
console.log(t)

//7 bigint
let v=BigInt(123);
let W=BigInt(3);
console.log(v+W);

//8
//== for equal value
//=== for equal value and data type
let n1="7";
let n2=7;
console.log(n1==n2)
console.log(n1===n2)

//9
//!= if n1 not equal to n2
//!== also datatype
console.log(n1!=n2)
console.log(n1!==n2)

//10
//if else
let nn=13;
if (nn%2===0){
    console.log("even")
}else{
    console.log("even")
}