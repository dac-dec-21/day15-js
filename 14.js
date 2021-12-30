let list = [
  { dt: 1640845800, temp: 21 },
  { dt: 1640932200, temp: 22 },
  { dt: 1641018600, temp: 22 },
];

// Current Timestamp
let date = new Date();
console.log(date);
console.log(date.getDate(), date.getFullYear(), date.getTime());

let date1 = new Date(1640845800 * 1000);
console.log(date1);

let date2 = new Date(1640932200 * 1000);
console.log(date2);

let date3 = new Date(1641018600 * 1000);
console.log(date3);
