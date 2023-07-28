"use strict";
//array destructuring

//normal
const myarr=["a","b"];
let myvar1=myarr[0];
let myvar2=myarr[1];
console.log("val of myvar1",myvar1);
console.log("val of myvar2",myvar2);

//destructure
const myarr=["a","b"];
let [myvar1,myvar2]=myarr;
myvar1="value changed";
console.log("val of myvar1",myvar1);
console.log("val of myvar2",myvar2);
//
const myarr=["a","b","c","d","e"];
let [myvar1,myvar2,...newmyarr]=myarr;
console.log("val of myvar1",myvar1);
console.log("val of myvar2",myvar2);
console.log(newmyarr);