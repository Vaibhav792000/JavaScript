// Stack (Primitive)   , Heap (Non-Primitive)
let name = "vaibhav@gmail.com";
let anotherName = name;

anotherName = "chaiaurcode"

console.log(name);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    UPI: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vaibhavsharma@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);