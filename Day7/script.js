"use strict";

//spread operator in objects
const obj1={
    key1:"val1",
    key2:"val2",
    key1:"val58" //recent key overwrites the previous key
}
console.log(obj1)
const obj2={
    key1:"val7",
    key3:"val3",
    key4:"val3",
}
// const newobj={...obj1,...obj2} //{key1: 'val7', key2: 'val2', key3: 'val3', key4: 'val3'}
const newobj={...obj2,...obj1,key69:"haha"} //{key1: 'val58', key3: 'val3', key4: 'val3', key2: 'val2'}
const aaa={...["a","b"]}; //for printing the indexing values
console.log(aaa)
console.log(newobj)


// object destructuring
const band={
    bandname:"lele",
    famoussong:"ok",
    afc:"haha"
}
const bname=band.bandname
const fsong=band.famoussong

// const {bandname,famoussong}=band;
const{bandname:var1,famoussong:var2}=band;
bandname="queen";
console.log(var1);

let {bandname,famoussong,...rest}=band
console.log(bandname)
console.log(rest)


//objects in array
const users=[
    {useris:1,gender:"num"},
    {useris:2,gender:"num"},
    {useris:3,gender:"num"}
]
console.log(users);