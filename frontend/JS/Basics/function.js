function sayMyName() {
  console.log("Suryanarayan");
}
// sayMyName  this is function reference
// sayMyName()  this is function call or function execution
//  very useful during DOM manipulation 

// sayMyName()

// during func defn the values passed is known as parameters while during func call the values passed are known as arguments(args)

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

//output

// addTwoNumbers()  it will returns NaN
// addTwoNumbers(10, "20") it will returns 1020
// addTwoNumbers(10, "a") //it will returns 10a
// addTwoNumbers(10, null) //it will returns 10

function addTwoNumbers(num1, num2) {
  
  // let result = num1 + num2;
  // console.log("surya");
  // return result
  return num1 + num2;
  // after return keyword in function the func will end and not eexecute further
}

//result inside function and outside function both arre different

const result = addTwoNumbers(10, 20);
console.log("Result", result);

function loginUseerMessage(username = "user" ) {
  // if(username === " ") {
    if(!username){ // if username is empty string or undefined return nothing
    console.log("Please enter a username");
    return 
  }
  return `Welcome back ${username}, Just Logged In`;
}
// default value is user if something is passed the deafult value will get overwrite

console.log(loginUseerMessage("Surya")) 
// it will return Welcome back Surya, Just Logged In 

// console.log(loginUseerMessage(" ")) //it will return Welcome back , Just Logged In  without name if empty string is passed
// console.log(loginUseerMessage())  // if nothing is passed it will return Welcome back undefined, Just Logged In  //undefined

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(100, 200, 300, 400, 500));


// func name(...num1){}  this ...num1 is known as REST operator inside function   
// while it is also known as spread operator [...num1, ...num2] while using arrays and objects

function handleObject(anyObj){
  console.log(`${anyObj.name} is ${anyObj.age} years old and his email is ${anyObj.email}`);
}

// thus mostly use typescript since there is already safety check --> check type safety in js through if else

//object passing inside a function
handleObject({
  name: "surya",
  age: 20,
  email: "surya@47"
})

// passing array inside a function
function secondValue(getanyArray){
  return getanyArray[1]
}

console.log(secondValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));