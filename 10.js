let list = ["delhi", "chennai"];
console.log(list);

// Adding in the end of the array.
list.push("mumbai");
list.push("hyderabad");
console.log(list);

// Add element in the begining of the array
list.unshift("calcutta");
list.unshift("kashmir");
list.push("kanyakumari");
console.log(list);

// Add Anywhere in the array.
list.splice(2, 0, "karnataka");
console.log(list);
