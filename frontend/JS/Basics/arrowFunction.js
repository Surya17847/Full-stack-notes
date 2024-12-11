// this and arrow function () => {}

// const user = {
//   username: 'Surya',
//   price: 1999,
//   sayHi: function () {
//     console.log(`Hii ${this.username} ` )
//   }
  // this is used to keep in context
// }
// arrow function mai this nhi hota 

// user.sayHi() 
// user.username = 'Narayan'
// user.sayHi()

// ***********************very very important****************
// console.log(this)  here current context in node env is {} empty object
// But when we do console.log(this)  in browser it will return window object since it is global object

// function chai(){
//   let username = "surya"
//   console.log(this.username);  we cannot directly do this insided a function we can do this inside object
// }
// chai()  it will return many values

// const chai = function( ){
//   let username = "surya" 
//   console.log(this.username); // we cannot directly do this insided a function we can do this inside object
// }
// const chai = () => {   // function hata ke uske badle we can use arrow AS function
//   let username = "surya" 
//   console.log(this.username); // we cannot directly do this insided a function we can do this inside object
// }
// chai()
// due to this we cannot use this keyword inside arrow function or normal function
// () => {}     arrow function

// explicit return function
// const addTwo = (num1, num2) => {
//  return num1 + num2;
// }
// most useful in React
// const addTwo = (num1, num2) => (num1 + num2)  // implicit return  mai we do not have to use { } as well as return 
//  console.log(addTwo(10, 20));

// *****IMP*****
// curly braces mai wrap kiya to return keyword likhna hi padega   {  return }  
// but if { return } we dont want to write we can simply use ( num1, num2)

// const addThree = (num1, num2, num3) => ({name:"surya"}); // to return object we have to use () paranthesis
// console.log(addThree(3, 4, 5)); 
// myArray.forEach()   inside this we can use () => ()  or () => {}


// *************************IIFE*********************************
// Immediately Invoked Function Expressions (IIFE)
// 1. executes immediately
// 2. used when Global scope pollute  OR  global scope ke pollution ko hatane ke liye we use iife


(function chai() {
  //named IIFE  since func has name
  console.log("DB connected")
})();

// IIFE  (function defn(){})(function execution)
((name) => {
  // unamed IIFE
  console.log(`DB Connected Two ${name}`);
})('Surya');

// do IIFE likhna hai to 1st IIFE ke baad ; lagana jaruri hai

// while using IIFE befor that and after that use ; if there is other function 