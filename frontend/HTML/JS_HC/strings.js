/*console.log("this is strings");
let a = "Surya"
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);//Js is error free
console.log(a.length);
// template literals
// ``  backticks
let myName = "Surya"
let friend = "krishna"
console.log(`My name is ${myName} and my friend name is ${friend}`);//if variable is injected inside `` then it is known as string interpolation
//we can also use methods on the go

//console.log(myName + friend + "value") outdated concept dont write like this

//Escape sequence0
// \n for newline \t for tab\r for carrriage return \" for inserting " inbetweeen  
//for property use .property but for function we have to use .function()*/
const gamerSurya = new String(' Surya-narayan-p ')//object created key: value pair
//master methoda is only to understand string
console.log(gamerSurya[0]);
console.log(gamerSurya.__proto__);//object
console.log(gamerSurya.length);
console.log(gamerSurya.toLocaleLowerCase);
console.log(gamerSurya.charAt(1));
console.log(gamerSurya.indexOf("n"));
//Strings ko break sanitize karna hai to go to mdn docs go through atmost methods of strings

let myname = "Krishna"
console.log(myname.toLowerCase())
console.log(myname.toUpperCase())
console.log(myname.length)
console.log(myname.slice(1,3))//3 is not included
const newString = console.log(myname.substring(0,3))//3 is not included only +ve values
console.log(myname.slice(5))//-ve values also aloud
console.log(`Hi I am ${myname.slice(-6,5)}`)//-ve values also aloud
console.log(myname.replace("ri","47"))
console.log(myname);
console.log(myname," narayan")
//Strings are immutable(means original string will not change )
//extra apaces bohot aata hai ye genral hai thus use trim only works on white space characters
console.log(gamerSurya.trim()); 
const url = "https://hitesh.com/hitesh%20choudhary"//whitespaces are replaced by %20 
console.log(url.replace('%20','-'))//to replace something use replace
//string are the most imp tool in any language 
// string to array
console.log(gamerSurya.split('-'));//make array from strings based on what specify
//spent 10-15 min on mdn docs
console.log(url.includes('surya'));//value hai ya nhi to check this use includes
// console.log(myname.splice(1,3))
// console.log(myname);
//two occurence hai to jo phele hai wo change hoga