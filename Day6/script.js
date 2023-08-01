"use strict";
//objects -reference type
//objects don't have index

// 
const p={
    name:"Dipika",
    age:"18",
    hobbies:["singing","travelling","reading"]
}
console.log(p)
console.log(p.name) //to access data from objects using dot notation
console.log(p["name"]) //to access data from objects using bracket notation

console.log(p.hobbies[0])
p.gender="female"; //to add a new key/value pair
console.log(p)
p["gender"]="male"; //to add a new key/value pair
console.log(p)


// how to replace variable by its value using brackets
const key="email";
const d={
    name:"Dipika",
    age:"18",
    hobbies:["singing","travelling","reading"]
}
d[key]="dk2@gmail.com" //if d["key"] & d.key then the key name will be 'key:dk2@gmail.com' instead of email
console.log(d)


//to iterate objects -used for in loops and object.keys
const e={
    name:"Dipika",
    age:"18",
    hobbies:["singing","travelling","reading"]
}
for (let key in e){  
    // console.log(e.key) //for keys only
    console.log(key,":",e[key]) //or console.log(e[key])
    // const val=Array.isArray(key,":",e[key]) //to check if it is array or not
    // console.log(val)
    // console.log(`${key}:${e[key]}`) //for both key value pairs
    // console.log(Object.keys(e)) //for the array of only keys
}


//computed properties
const key1="obj1";
const key2="obj2";

const val1="myval1";
const val2="myval2";

const obj3={
    [key1]:val1, //[] helps to replace key1 by its value i.e. obj1 . This is called computed property.
    [key2]:val2
}
console.log(obj3)
//Alternative
const obj={}
    obj[key1]=val1, 
    obj[key2]=val2

console.log(obj)


//spread operator
const arr1=[1,2,3]
const arr2=[1,2,3]
const newarr=[...arr1,...arr2,34,56]
const barr=[..."abc"] //... spreads strings but not numbers
console.log(newarr)
console.log(barr)


//spread operator in objects
const obj1={
    key1:"val1",
    key2:"val2",
    key1:"val58" //recent key overwrites the previous key
}
console.log(obj1)