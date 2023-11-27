let firstName = "John";
let lastName = "Jack";

console.log(`User fullname: ${firstName}, ${lastName}`);

let userDetails = {
  fname: "John",
  lname: "Jack",
  age: 23,
  isAdmin: true,
  city: "Chennai",
};

for (const user in userDetails) {
  console.log(`${user} => ${userDetails[user]}`);
}
