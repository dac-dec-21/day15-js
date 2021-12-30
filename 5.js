let obj1 = {};
let obj2 = { id: 1 };
let obj3 = { id: 1, username: "rohit" };

let obj4 = { id: 1, username: "rohit", status: true };
let obj5 = {
  id: 1,
  username: "rohit",
  status: true,
  address: { city: "mumbai", state: "mh" },
  list: ["delhi"], // List<String>
  list1: [{}], // List<Object>
};

let obj6 = {
  address: {},
  cityList: [], // list<string>
  list1: [{}], // list<object>
};

let obj7 = {
  address: {
    city: "mumbai",
    state: "MH",
    pincode: "400001",
  },
  cityList: ["delhi", "calcutta"],
  movieList: [
    {
      name: "RRR",
      director: "rajamouli",
      actors: ["ramcharan", "ntr"],
    },
    {
      name: "pushpa",
      director: "skumar",
      actors: ["alla arjun"],
    },
  ],
};
