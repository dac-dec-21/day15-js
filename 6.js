// 1. Object
// 2. Add/Update New member
// 3. Access the members
// 4. Add/Update the members
// 5. Delete the member

let obj = {
  id: 1,
  username: "rohit",
  email: "rohit@gmail.com",
  mobile: "12121212",
};

let msg = `Hello, ${obj.username}. Please respond to your email ${obj.email}`;
console.log(obj, obj.age);

// update the members
obj.username = "Mr. Rohit Sharma";
obj.mobile = "717171717";
console.log(obj, obj.age);

// Add New Member
obj.age = 21;
console.log(obj, obj.age);

// Delete a member
delete obj.mobile;
console.log(obj, obj.mobile);
