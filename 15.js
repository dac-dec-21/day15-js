let list = [
  { dt: 1640845800, temp: 21 },
  { dt: 1640932200, temp: 22 },
  { dt: 1641018600, temp: 22 },
];

for (let i = 0; i < list.length; i++) {
  let item = list[i];
  console.log(item);
}

console.log("For Each Way");
// For Each
for (let item of list) {
  console.log(item);
}
