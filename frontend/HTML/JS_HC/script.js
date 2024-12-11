//**************Strings**************//


// const name = "Surya"
// const roll_no = 47
// /***********Mordern Syntax************/
// console.log(`My name is ${name} and my roll no is ${roll_no}`);//use tactics syntax mordern syntax to inject value use ${value}   known as String Interpolation
// const gamerSurya = new String('Surya narayan 360');

// console.log(gamerSurya.trimStart());
// console.log(gamerSurya.trimEnd());
// console.log(gamerSurya.trim());//use to remove whitespaces
// console.log(gamerSurya.split(' '));

// /************Numbers***************/
// const score = 500
// console.log(score);
// // console.log(typeof score);  

// const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//used in e-commerce website for precision value
// const anotherNumber = 1041.555294360
// console.log(anotherNumber.toPrecision(3));//interesting
// const hundreds=10000000
// console.log(hundreds.toLocaleString('en-IN'));
// // max_value min_value much more

/******************Maths Library*************/
console.log(Math)
// floor ceil round abs sqrt min max 
// where  it is used?   for Math.random() always between 0-1 
// +1 to avoid case 0 
//formula  
// console.log(Math.floor(Math.random()*(max - min + 1)) + min) //this is correct syntax   +min bcoz min utna chahiye hi

/******************Date & Time********************/
// pain point   
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(mydate.toUTCString());
console.log(mydate.getTimezoneOffset());
// Output
// Thu Nov 23 2023 21:19:18 GMT+0530 (India Standard Time)
// Thu Nov 23 2023
// 21:19:18 GMT+0530 (India Standard Time)
// 23/11/2023
// 9:19:18 pm
// 2023-11-23T15:49:18.496Z
// 2023-11-23T15:49:18.496Z
// 23/11/2023, 9:19:18 pm
// Thu, 23 Nov 2023 15:49:18 GMT
// -330
