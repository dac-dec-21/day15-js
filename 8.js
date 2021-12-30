let obj = {
  id: 1,
  username: "rohit",
  address: {
    city: "mumbai",
    state: "mh",
  },
};

// Accessing the nested member
console.log(obj.address);
console.log(obj.address.city);

// Add pincode as nested member of address
obj.address.pincode = "400001";
console.log(obj.address);
