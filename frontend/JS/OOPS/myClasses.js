// saara kaam we can do after ES6: jaise new, class,etc

// jaise hi new keyword use karoge(class se object banane ke liye) waise hi constructor() call ho jata hai apne aap
// class User {
//   constructor(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   // inside class function is knon as methods
//   encryptPassword(){
//     return `${this.password}abc`
//   }
//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const chai = new User("chai", "chai@yahoo.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// Behind the scenes (BTS)

function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}

User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@yahoo.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
