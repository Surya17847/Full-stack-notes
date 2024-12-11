class User {
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`Username is ${this.username}`);
  }
}
//  behind the scenes
class Teacher extends User {
  constructor(username, email, password){
    super(username); // agar object wale method se karte to .call() and this use karna padta hota hai 
    // super keyword apne saath by default this keyword lekar jayega
    this.email = email;
    this.password = password;
  }

  addCourses(){
    console.log(`${this.username} is adding courses`);
  }
}

const chai = new Teacher("chai", "chai@fb.com", "123");

chai.addCourses()
chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()
// masalaChai.addCourses()  since user do not have access to addCourses

// console.log(chai === Teacher); // false
console.log(chai instanceof Teacher); // true  // it will check kya chai instance hai Teacher ka 
console.log(chai instanceof User)