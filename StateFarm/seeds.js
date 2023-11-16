const Product = require("./models/product");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((err) => {
    console.log("Something went wrong when connecting to mongo");
    console.log(err);
  });

// const p = new Product({
//   name: "Apple",
//   price: "1.99",
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log("Something went wrong");
//     console.log(err);
//   });

const seedProducts = [
  {
    name: "Apple",
    price: 1.99,
    category: "fruit",
  },
  {
    name: "Brie cheese",
    price: 10.0,
    category: "dairy",
  },
  {
    name: "Grapes",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Carrots",
    price: 0.5,
    category: "vegetable",
  },
  {
    name: "Watermelon",
    price: 2.99,
    category: "fruit",
  },
  {
    name: "Beet",
    price: 0.5,
    category: "vegetable",
  },
  {
    name: "Chocolate milk",
    price: 3.99,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
