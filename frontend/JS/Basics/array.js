myArr = [0, 1, 2, 3, 4, 5, 6]

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr)//typeof object
// console.log(newArr)//typeof string

//slice, splice


const myn1 = myArr.slice(1,3)// excludes last element and give copy of the element in array
console.log("A", myArr)
console.log("B", myn1)

const myn2 = myArr.splice(1,3)// includes last element and removes that elen=ment and make new array of it
console.log("A", myArr)
console.log("C", myn2)


const marvel_heroes = ['thor', 'Ironman', 'spiderman']
const dc_heroes = ['superman', 'flash', 'batman']

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);//dc_heroes  array append as single element inside other array
//thus use concat to add two arrays
 
const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)
//### push method  push array into existing array and returns it  while concat add two arrays and returns a new array concatenating both arrays

// spread = bikhar jana eg  glass break  Syntax:- [...name1, ...name2]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

const new_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5, 6]]]
const new_real_array = new_array.flat(Infinity)

console.log(new_real_array);

