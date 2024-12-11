// prototypal behaviour(default behaviour)/ haar nhi maan na :  Js ka mechanism , haar nhi maanta jab tak null nhi milta 
// this, new, prototypal inheritance, classes all we get due to prototypal behavior of Js(kuch nhi samjhega to puchega sharmayega nhi)

// Q:  is function a function or object?
// ans: function function ki tarah behave karta hai but function object bhi hai 

// JS mai array string function or baki sab at the end Object ke paas hi jate hai and object ka parent null hai :
//  this full chaining is known as prototypal inhertance,  jab ek value na mile to uske parent se pucho aise karte jao till we  get null
function multiplyBy5(num){
  return num * 5
}
multiplyBy5.power = 2 // we can do this
// console.log(multiplyBy5(5)); // 25
// console.log(multiplyBy5.power); // 2
// console.log(multiplyBy5.prototype); // {}

function createUser(username, score){
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function(){
  this.score++; // this mtlb jis,  jis-jis ko bhi dena ho to use this keyword
}// jiska is this
createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`);
}

const chai = new createUser('chai', 30)
const tea = createUser('tea', 300)

// console.log(chai);
// console.log(tea);

// behind the scene new keyword has many work and do a lot of work


  
//           ***IMP***

// let myName = "Surya     "
// let myChannel = "Facts    "

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy Power is ${this.spiderman}`);
  }
}

// agar Object ko hi super power de de to baki sab to object se hi hoke jayenge 

// Object ke upar or koi prototype ya superprototype nhi hota uske upar null hota hai

// we can access directly Object,  Object.create is known as factory function which is used to create and built in by default  

// here we access top level hierarchy
Object.prototype.surya = function(){
  console.log(`Surya is present in all objects`);
}
// heroPower.surya()  

 
Array.prototype.heysurya = function(){
  console.log(`Surya says hello`);
}
// myHeroes.surya()
// myHeroes.heysurya()
// heroPower.heysurya() // object ke paas to array ka prototype ka access nhi hota  , valid point


//  Inheritance (Prototypal inheritance)

// Thoda  older approach
const user = {
  name: "chai",
  email: "chai@google.com"
}
const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignmwnt: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport // isse we can access doosra object also with __proto__
}

Teacher.__proto__ // this is used to link between two objects 

// Objects dont share their properties but to make a link between objects use __proto__  

// New approach (mordern syntax)

// Object.setPrototypeOf(wo jo property access karega, jiska property access karna hai wo )

// same classes mai bhi hota hai but wahan extends keyword hai (Syntactic sugar)

Object.setPrototypeOf(TeachingSupport, Teacher) //  BTS __proto__ hi chal raha hai

let anotherUsername = "ChaiAurCode         "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
  // console.log(`${this.name}`);  // undefined   since this.name ka access nhi hai
}
//  this mtlb jis   // jisne bulaya uska this // see output in line no. 125-130
anotherUsername.trueLength(); 
"Surya ".trueLength();
"lemonTea".trueLength();

// Output:-

// ChaiAurCode
// True length is 11
// Surya
// True length is 5
// lemonTea
// True length is 8