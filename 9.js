let list = [];

let list1 = ["delhi", "chennai"];

//1. Length of an Array.
console.log(list.length, list1.length);

// 2. Access the element/item/member of an array :: Array Index
console.log(list1[2]);

// 3. Add New element/item/member :: Stack :: PUSH AND POP
list1.push("mumbai");
console.log(list1);

// 4. Update element/item/member
list1[0] = "DELHI";
console.log(list1);

// 5. Delete element/item/member
list1.pop();
console.log(list1);
