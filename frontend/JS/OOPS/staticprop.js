// Properties are also known as props in React

class User {
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`Username: ${this.username}`);
  }

  // static keyword is used to create a static method in class jiska access instance ko nhi hoga 
  static createId(){
    return `123`
  }
}

// code mai sab chiz kaam karne se jyaada access rokna jaruri hai 
const surya = new User("surya")
// console.log(surya.createId());

class Teacher extends User {
  constructor(username, email){
    super(username)
    this.email = email
  }
}
const iphone = new Teacher("iphone", "iphone@phone.com");
iphone.logMe()
// console.log(iphone.createId()); iska access nhi hai since static method hai