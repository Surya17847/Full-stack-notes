// // Object literals

// const user = {
//   // this are properties of object literals
//   username: 'surya',
//   logInCount: 0,
//   signedIn: true,

//   //this is method of object literals
//   getUserDetails: function(){
//     // console.log("Got user details from DB");
//     // this keyword is used for current context
//     console.log("Username: ", this.username);
//    // console.log(this);  full object milega in this
//   }
//   }
  
//   console.log(user.username);
//   console.log(user.getUserDetails()) ;
//   // console.log(this);  empty object milega in node js 
//   // console.log(this);  Window object jo ek global object hai wo milega in browser 

// const promiseOne = new Promise()
// new is a constructor function() , it allows to create multiple instance from a object, always gives an new instance
// eg:  promise mai we want new instance only 

function User(username, logInCount, isLoggedIn){
  // this.username = username;  both side same name this.username is variable and username is the value
  this.username = username;
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function(){ // it is a method
    console.log("Hello ", this.username);
  }
  // return this;  // return this se poora object return hoga
  // iski jarurat nhi hai implicit return hota hai
}

const userOne = new User("Surya", 12, true);
// const userTwo = User("ChaiaurCode", 11, false); // value overwrite kar dega ye naya function isliye new keyword use karo 
const userTwo = new User("ChaiaurCode", 11, false); 
console.log(userOne.constructor); // reference hota hai apne/function hi baare mai 
// console.log(userTwo);

// step1: new keyword use karenge to empty object create hoga
// step2: constructor function called due to new keyword
// step3: all the arguments are packed up with this keyword
// step4: we get all values through function

// also there is instanceof keyword