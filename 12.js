let list = ["delhi", "chennai"];

// ADD IN THE END
list.splice(list.length, 0, "karnataka");
list.splice(list.length, 0, "hyderabad");
console.log(list);

// Add In the beginign
list.splice(0, 0, "calcutta");
console.log(list);
