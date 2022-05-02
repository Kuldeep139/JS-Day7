// Method 1: Creating and assigning value to array
let name1 = ["Kuldeep" , "Pankaj" , "prathamesh" , "kishor" , "keval"];
console.log(name1);

// Method 2: 
let name2 = [];
name2[0] = "Rudoff"
name2[1] = "Kuldeep"
name2[2] = "Lakhi"
name2[5] = "Ravi"
console.log(name2);

// Create an array using Constructor
let name3 = new Array("Raju", "Shyam" , "Baburao");
console.log(name3);

// Eg:
let name4 = ["Kuldeep", 24 , 10 , 2.5 ];
console.log(name4);

// Push, Pop, Shift, Unshift, Length, indexOf, lastIndexOf

// Push - Adds value always to a last position
name1.push("Ashutosh");
name1.push(5);
console.log(name1);

// Pop - helps us to remove the position from the last position
// to remove last 2 properties use pop two times
name1.pop();
console.log(name1);

// Shift removes from 1st position and Unshift adds to the 1st position.

// Shift
name2.shift();
console.log(name2);
// Unshift
name2.unshift("Rajesh");
console.log(name2);

// Length

console.log(name1.length);

// indexOf,  lastIndexOf, Join, Concat, reverse, sort, slice, splice

// Indexof
let num1  = [1,2,3,4,5,5,6];
let num2  = [6,7,8,9,10];

console.log(num1.indexOf(5));
console.log(num1.lastIndexOf(5));

// concat do not changes the original array
console.log(num1.concat(num2));

// join
console.log(num1.join("-"));

// Reverse

console.log(num1.reverse());

// sort
// it modifies the original array
let num3 = [8,5,4,3,9,1,7,2];
// console.log(num3.sort());

// using sort and reverse together gives values in descending order

// console.log(name1.sort.reverse());

// Splice
// First value gives the index and second value gives the number of values to be removed

// num3.splice(2,1,10,11,12,13);
// console.log(num3);

// Slpice

num3.slice(2,6);
console.log(num3.slice(2,6));


