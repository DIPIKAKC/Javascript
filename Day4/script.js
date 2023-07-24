"use strict";
// reference type -same address and one array for both arr1 and 2 if arr1=arr2
//stores in heap



//to clone array
//if change is madde in original array it doesnot affect the clone
let arr1=["dipika","kc"]
//1st way
let arr2=["dipika","kc"]
//2nd way
let arr2=arr1.slice(0);//starts from index 0 to end of arr1 and clones
//3rd way
let arr2=[].concat(arr1)
//new way-spread operator
let arr2=[...arr1]
arr1.push(18);//doesnot affect arr2
console.log(arr1===arr2)//prints whether or not the two arrays are same
console.log(arr1)
console.log(arr2)



// concatenating array
let arr1=["haha","ehe"]

//1st way
let arr2=arr1.slice(0).concat(["hehe"])

//2nd way
let arr2=[].concat(arr1,["hehe"])

//3rd way
let arr2=[...arr1,"hehe"] //for 2 arrays-[...arr1,...arr2]
console.log(arr1===arr2)
console.log(arr1)
console.log(arr2)



// for loop in array
let a=[1,2,3,4,5]
for(let i=1;i<a.length;i++){
    console.log(i); //prints from index 1 to length
}
console.log(a.length()) //gives the length of the array



//const for creating array
//right
const a=[1,2,3,4,5]
a.push(8);
console.log(a)

// also
const fruits=["apple","mango"]
fruits.push("orange")
console.log(fruits)

//assignment to constant variable
const fruits=["apple","mango"]
fruits=[]
fruits.push("orange")
console.log(fruits)



// while loop in array
const fruits=["apple","mango","orange"]
let i=0;
while(i<fruits.length){
    console.log(fruits[i])
    i++;
}



// for of loop in array
// 1
const fruits=["apple","mango","orange"]
for(let fruit of fruits){ //simply iterates over each value of fruits and prints them
    console.log(fruit)
}

// 2
const fruits=["apple","mango","orange"]
const f=[]
for(let i=0; i<fruits.length;i++){ //simply iterates over each value of fruits and prints them
    console.log(fruits[i])
}


// for in loop in array
const fruits=["apple","mango","orange"]
for(let index in fruits){ //simply iterates over each value of fruits and prints their index
    console.log(index) // for index num
    console.log(fruits[index]) // fruits[index] prints the acutal values in fruits instead of their index numbers
}