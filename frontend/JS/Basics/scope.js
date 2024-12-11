//how to take input in Javascript
let a = 10 // block scope
const b = 20 // block scope
// var c = 30 // global scope

// console.log(a)
// console.log(b)
// console.log(c)

if (true){
//  scope hai if it is with function and if else  
}
// browser and node mei scope alag-alag hota hai

// +++++++++++++++++++++++++Interesting +++++++++++++++++++++++++

// addone(10)  valid
function addone(num){  // known as function
    return num + 1
}

// console.log(addone(5))

// addTwo(20)  invalid since we hold function inside variable
const addTwo = function(num){ // also known as expression
  return num + 2

}
// console.log(addTwo(10))
// console.log(addTwo(20));

