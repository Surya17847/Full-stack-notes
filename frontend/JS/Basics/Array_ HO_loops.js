//forin foreach forof  used with array // Higher order array Loops
// /array and objects are very powerful in Js 

// ["", "", ""]
// [{}, {}, {}]

//************************** for of********************************
// Syntax : for (let/const variable of array/String) {
  
// }
// eg for num of numbers 
// eg for greet of greetings
// const arr = [1,2,3,4,5]
// for (const num  of arr) {
//   console.log(num);  
// }
// const greetings = "Hello world"
// for (const greet of greetings) {
//   console.log(greet);
// }
  
// Maps
//map remember the order of insertion of keys
// no duplicate and unique values are there in map

// const map = new Map()
// // Syntax :- map.set(key, value)
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// //order maintained in map
// console.log(map);
// map is not iteratable using forof and forin  
// // for (const key of map) {
// //   console.log(key);  
// // }
// for (const [key, value] of map) { //[key, value] desctucturing of array
//   console.log(key, ':-', value);  
// }
    
// const myObject = {
//   'game1': 'NFS',
//   'game2': 'COD',
//   'game3': 'PUBG'
// }
// forof loop is not iteratable on object 
// we cannot use forof loop for object to iterate map
      

// for (const [key, value] of myObject ){
//   console.log(key, ':-', value);  
// }

//************************** for in********************************

// for in loops is used to iterate object as well as array

// const myObject = {
//   js: 'Javascript',
//   py: 'Python',
//   rb: 'Ruby',
//   go: 'Golang',
//   swift: 'Swift'
// }
// for (const key in myObject) {
//   // if (Object.hasOwnProperty.call(object, key)) {
//   //   const element = object[key];
//   // }
//*/     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ['Javascript', 'Python', 'Ruby', 'Golang', 'Cpp']
// for (const key in programming) {
//     console.log(programming[key]);
// }

//************************** forEach********************************
// forEach ke andar function likhte hai   mostly used for array
const coding = ['Javascript', 'Python', 'Ruby', 'Golang', 'Cpp']
// forEach is Higher order function

// coding.forEach( function (key) {   
//   console.log(key);
// })  //call back hai isliye function ka naam nhi hoga

 //function smarter know length and where to start

 // coding.forEach( (key) => {
//   console.log(key);
// })

// function printMe (item) {
//   console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach(pass a function reference)   
// printMe : reference of function 
// printMe() : exection of function

// coding.forEach( (item, index, list) => {
//   console.log(item, index, list);
// })

const myCoding = [
  {
    name: 'Javascript',
    shortcut: 'js'
  },
  {
    name: 'Python',
    shortcut: 'py'
  },
  {
    name: 'Ruby',
    shortcut: 'rb'
  },
  {
    name: 'Golang',
    shortcut: 'go'
  },
  {
    name: 'Swift',
    shortcut:'swift'
  }
]
// v. v. imp to use loops on array of objects
// myCoding.forEach( (item) => {
//   console.log(item.shortcut)
// })