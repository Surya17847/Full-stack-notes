// call bind apply : genrally ek saath sikhate hai  but we will learn seperately 
// react 1 mai bind or call bohot use hota tha

// call stack : Global exe context, function , uska exe context

function SetUsername(username){
  //Complex DB calls
  this.username = username;  // this used to tells about the currrent context 
  console.log("called");
}

function createUser(username ,email, password){
  // SetUsername(username); // undefined  since call hi nhi ho raha hai bas reference jaa rha hai so for this we have to use call keyword
  SetUsername.call(this, username);  // reference hold karke rakhne hai isliye use call and we can paas 1st parameter in .call( ) that is this which willl hold all values and variables of function 
  this.email = email;
  this.password = password;
}

const chai = new createUser("Chai", "chai@google.com", "12345")

console.log(chai);