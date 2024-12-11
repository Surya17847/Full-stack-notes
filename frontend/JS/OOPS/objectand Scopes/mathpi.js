const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// object ke kuch hidden chizo ke baare mai batata hai
// object ko bhi iteratable roke jaa sakta hai

console.log(descripter);
// output
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// we can't change this value 

// so Math.PI value cant be changed 

// console.log(Math.PI); // output: 3.141592653589793
// Math.PI = 4
// console.log(Math.PI); // output: 3.141592653589793

const chai = {
  name: 'ginger chai',
  price: 250,
  isAvailable: true,

  orderChai: function(){
    console.log(`Chai nhi bani`);
  }
}

console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai)) // undefined
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
  // writable: false,
  enumerable: true // iterate hona band ho jayega if enumerable is false
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
  if(typeof value !== 'function'){ // real world aise handle karenge
  console.log(`${key} : ${value}`);  
}
}