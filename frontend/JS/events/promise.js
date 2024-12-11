// fetch('http://something.com').then().catch().finally()
// jyaadatar we consume promises

// first we have to learn how to create promises
// after creating promise we have to consume it also
//'''''''''''''''''''''''''''''''''''' 
//Promise is an object   representing the eventual completion or failure of asynchronous operation.

// const promiseOne = new Promise(function(resolve, reject)){}   aisa we can do after ES6. This is the way to create function. function inside promise accept two parameters either it will resolve or reject  
// ES6 ke phele promise(  fetch, then, catch ) use karne ke liye some libraries are used like  Q and BlueBird 

const promiseOne = new Promise(function(resolve, reject){
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function(){
    console.log('Async task is complete');
    resolve()
    // 1st async task complete then promise will be resolved
  }, 1000)
})

promiseOne.then(function(){ // by  deafult then has relation with resolve to connect use resolve()  and the execution in promise will return directly to function inside thendis
  console.log('Promise consumed');
})

new Promise(function(resolve, reject ){
  setTimeout(function(){
    console.log('Async task 2')
    resolve()
  }, 1000);
}).then(function(){
  console.log('async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: 'surya', email: 'surya@google.com'}) // we can paas any object or array of objects in resolve this parameters will pass to .then as argument  
  // 'user': "name"  OR user: 'name'  dono sytax chalega  but follow one 
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if (!error){
      resolve({username:"Surya", password: "360"})
    } else {
      reject('ERROR: Something went wrong')
      // reject is related with catch
    }
  }, 1000)
})
// prevent from call back hell 
// wew can use .then multiple times as much we want/required :  it is known as chaining
const username = promiseFour
.then((user) => {
  console.log(user);
  return user.username
})
.then((username) =>{
  console.log(username);// this is known as chaining and it is imp while we retrive data from DB
})
.catch((error) => {
  console.log(error);
}).finally(() => console.log('Promise is either resolved or rejected')
) // finally run hoga hi chahe promise resolve ho ya  reject

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error =false;
    if (!error) {
    resolve({ username: 'JS', password: '5152' })
    } else { 
      reject('ERROR: Something went wrong')
      // reject is related with catch
    }
  }, 1000)
}) 
// promise mtlb Future mai hone wali chiz 
// we can handle promise with both .then .catch  OR  async await

// async await will wait for sometime if promise or function execute then ok,  async dont handle error part properly  
// thus use try catch block with async await always
async function consumePromiseFive(){
  try {
    const response = await promiseFive  // since promise is an object hold it in a variable
    console.log(response);// jahan time lagega use await
  } catch (error) {
    console.log(error);
  }  
}

consumePromiseFive() // execute this function/ promise

// async function getAllUsers(){
//  try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')// fetch will return a promise sincr it takes time use await with it 
//   // console.log(response);
//   const data = await response.json()
//   console.log(data);
//  } catch (error) {
//   console.log("E:", error);
//  }
// } 

// getAllUsers()
// ***IMP***
// when use async and await always at last execute the function 


// fetch is the exciting feature of node.js   before this xhr request is used

// fetch Api is library, it is network based request  and  returns a promise,  if some http error 404 occur it will shown by then means resolve() part if there is network error then only catch will handle and then reject() it

fetch('https://api.github.com/users/surya17847')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})   // ek then hone ke baad hi doosra then execute hoga
.catch((error) => console.log(error))

// sabse phele fetch execute hoga uske baad hi baki ke sab execute hoga  since fetch() has high priority queue

// high priority queue  || fetch queue  || Micro task queue this are the different names of the fetch queue