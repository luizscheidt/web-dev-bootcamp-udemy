const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");

const AppError = require("./AppError");

const Product = require("./models/product");
const Farm = require("./models/farm");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStandTake2")
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((err) => {
    console.log("Something went wrong when connecting to mongo");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const sessionOptions = {
  secret: "SECRET",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());

const categories = ["fruit", "vegetable", "dairy"];

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

// FARM ROUTES

app.use((req, res, next) => {
  res.locals.messages = req.flash("info");
  next();
});

app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", {farms});
});

app.delete(
  "/farms/:id",
  wrapAsync(async (req, res) => {
    const deletedFarm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect("/farms");
  })
);

app.get("/farms/new", (req, res) => {
  res.render("farms/new", {categories});
});

app.post(
  "/farms",
  wrapAsync(async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash("info", "New farm created!");
    res.redirect("/farms");
  })
);

app.get(
  "/farms/:id",
  wrapAsync(async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate("products");
    res.render("farms/details", {farm});
  })
);

app.get(
  "/farms/:id/products/new",
  wrapAsync(async (req, res) => {
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render("products/new", {categories, farm});
  })
);

app.post(
  "/farms/:id/products",
  wrapAsync(async (req, res) => {
    const {id} = req.params;
    const farm = await Farm.findById(id);
    const {name, price, category} = req.body;
    const product = new Product({name, price, category});
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    req.flash("info", "New product added to your farm!");
    res.redirect(`/farms/${id}`);
  })
);
// PRODUCT ROUTES

app.get(
  "/products",
  wrapAsync(async (req, res, next) => {
    const {category} = req.query;
    if (category) {
      const products = await Product.find({category});
      res.render("products/index", {products, category});
    } else {
      const products = await Product.find({});
      res.render("products/index", {products, category: "All"});
    }
  })
);

app.get("/products/new", (req, res) => {
  res.render("products/new", {categories});
});

app.post(
  "/products",
  wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    const farms = await Farm.find({});
    newProduct.farm.push(farms);
    await newProduct.save();
    await farms.save();
    res.redirect(`/products/${newProduct._id}`);
  })
);

app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.findById(id).populate("farm", "name");
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    res.render("products/details", {product});
  })
);

app.get(
  "/products/:id/edit",
  wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    res.render("products/edit", {product, categories});
  })
);

app.put(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.redirect(`/products/${product._id}`);
  })
);

app.delete("/products/:id", async (req, res) => {
  const {id} = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

const handleValidationError = (err) => {
  console.log(err);
  return new AppError(`Validation Failed: ${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") err = handleValidationError(err);
  next(err);
});

app.use((err, req, res, next) => {
  const {status = 500, message = "Something went wrong"} = err;
  res.status(status).send(message);
});

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
