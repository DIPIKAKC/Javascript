"use strict";


//object in array

const users=[
    {userid:1,fn:'dipika',g:'f'},
    {userid:2,fn:'sneha',g:'f'},
    {userid:3,fn:'aayusha',g:'f'}
]
for (let user of users){
    console.log(user.fn)
}


//nested destructuring

const users=[
    {userid:1,fn:'dipika',g:'f'},
    {userid:2,fn:'sneha',g:'f'},
    {userid:3,fn:'aayusha',g:'f'}
]

const [{fn:user1fn,userid}, ,{g:user3g}]=users;
console.log(user1fn);
console.log(userid);
console.log(user3g);
