let list = [
  { dt: 1640845800, temp: 21 },
  { dt: 1640932200, temp: 22 },
  { dt: 1641018600, temp: 24 },
];

for (let item of list) {
  let date = new Date(item.dt * 1000);
  console.log(`Date ${date.getDate()} Temprate is ${item.temp}`);
}
