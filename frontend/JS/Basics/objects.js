// #1
//singleton

// literal se singleton nhhi banta 
// const JsUser = {}

// constructor se ahmesha singleton banta hai
// Object.create() //constructor method

//object literals  // we can define key and value
const mySym = Symbol("key1");

const JsUser = {
  name:"Surya",
  "full name" : "Surya narayan Panigrahy",
  age:20,
  email:"surya@gmail.com",
  location:"Mumbai",
  isLoggedIn:false,
  [mySym]: "mykey1"// to define Symbol as a key use this Syntax:- [mySymbol]: "mykey" 
}
// Keys internally act as string "key": "value"   pair and this pair is known as one item
// console.log(JsUser.name);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);//imp when there is spaces in key.

// console.log(JsUser[mySym]);//to access this Symbol use [mySym]  syntax

JsUser.email = "surya@youtube.com"
// console.log(JsUser.email);

// Object.freeze(JsUser)// to lock any object so that no one can change it further
JsUser.email = "surya@amazon.com"

// console.log(JsUser); 

JsUser.greeting = function(){
  console.log(`hello Js user, ${this.name}`)// from this keyword we can access object values
}
console.log(JsUser.greeting)// FUnction only returns but not execute : function return value
// console.log(J sUser.greeting());

//   we can access objects by .  or [ ] 

// #2 +++++++++++++++++++++++++++++++++++++++++++++++++


// objets as construtor

const tinderUser = new Object()//singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

const regularUser = {
  email: "sam@gmail.com",
  fullname: {
    userfullname:{
    firstname: "Sam",
    lastname: "Smith"
  }
  },
}

// console.log(tinderUser)
// console.log(regularUser.fullname.userfullname.firstname)

// console.log(regularUser.fullname?.userfullname.firstname)   THIS syntax is used for API and other where there may be case if fullname not there , we use ?  known as Optional Chaining


const obj1 = {
  name: "surya",
  age: 20,
}

const obj2 = {
  gender: "male",
  location: "mumbai",
}
// const obj3 = {obj1, obj2} // not proper way

const obj3 = Object.assign({}, obj1, obj2) // {} pass this in assign it is optional parameter we get exact values
// {}  act as target    while obj1 and obj2 are source
// console.log(obj3)

// if both object has same key then the object at last which have same key it is shown in output

const obj4 = {...obj1, ...obj2} //spread operator :   simple and easy to use
// console.log(obj4);

// sometimes wjile dealing with DB we get array of objects  const user = [{obj1: "myobj1"}, {}, {} ]
// to access this use this syntax  : user[1].obj1

// imp functions of objects
// console.log(Object.keys(tinderUser)) // returns array of keys inside an object
// console.log(Object.values(tinderUser))// returns array of values inside an object 
// console.log(Object.entries(tinderUser))// make key value as seperate array inside a main array

// console.log(tinderUser.hasOwnProperty("isLoggedIn")) ;// returns true  boolan values


// #3++++++++++++++++++++++++++++++++++++++++++++++++
// destructuring we can do of arrays and objects here we  will destructure object

const course = {
  coursename: "JS",
  price: 1999,
  courseInstructor: "surya"
}

// syntatical sugar

const {courseInstructor: instructor} = course  //  const  {shortform} = kahan se extract karna hai known as object destructuring
console.log(instructor);

// we will use this in React
// const navbar =  ({company}) => {// knoen as props

// }
// navbar(company = "Google")

// Apna sir kisi or pai daalna = API

// we get values from backend in form of JSON
//  in JSON both "key": "value" are in string
// {
//   "coursename": "JS",
//   "price": 1999,
//   "courseInstructor": "surya"
//   "isLoggedIn": true,
//   "company": null
// }

// [ {}, { {}, {} }, {}]  // array of objects  we have to destructure this while handling API

