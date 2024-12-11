// const coding = ['js', 'css', 'HTML', 'Python', 'Ruby', 'Golang', 'Cpp']

// const values = coding.forEach( (item) => {
//   console.log(item)
// })
// console.log(values);   in this case undefined is returned by forEach loop

// const values = coding.forEach( (item) => {
//    console.log(item)
//  return item
// })
// in this case also undefined is returned
// console.log(values);
// always forEach value does not return anything 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// ***IMP // filter gives a callback function 
// while forEach does not returns a value

// # method 1
// const newNums = myNums.filter( (num) => num > 4 ) //condtion in arrow function
// console.log(newNums);

// use () => ()  to return || () => condition  ||  () => { return value}     these are 3 syntax to return from arrow function  use return keyword with {}
// scope se return karna hai to use return keyword

// # method 2
// const newNums = []
// myNums.forEach( (num) => {
//   if (num > 4){
//     newNums.push(num)
//   }
// })
// console.log(newNums);

// const books = [
//   {title: 'Book One', genre: 'Fiction', publish: 1957, edition: 2004 },
//   {title: 'Book Two', genre: 'Non-Fiction', publish: 1987, edition: 2004 },
//   {title: 'Book Three', genre: 'Fiction', publish: 2010, edition: 2004 },
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'Fiction')
// console.log(userBooks);

// let userBooks = books.filter((bk)=> bk.publish > 1980 && bk.genre === 'Fiction')
// console.log(userBooks);


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumbers.map((num) => num + 10)

//Chaining
// const newNum = myNumbers
//               .map((num) => num + 1)// iska value doosre chain mai paas hoga
//               .map((num) => num *10)
//               .filter((num) => num >= 50 )

// console.log(newNum)
// filter  mai true false ka game hai map mai as it is return hota hai


// reduce is used when we use shopping cards reducer

const myNums = [1, 2, 3]

// const newTotal = myNums.reduce(function (acc, currval) {
//  console.log(`acc: ${acc} currval: ${currval}`);
//   return acc + currval
// }, 0 )
const newTotal = myNums.reduce((acc, currval) => acc + currval, 0 )
console.log(newTotal);