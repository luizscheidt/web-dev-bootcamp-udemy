const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let movieList = [
  {
    id: uuid(),
    name: "Titanic",
    year: 1998,
    description: "One of the most famous movies ever, got DiCaprio in it",
  },
  {
    id: uuid(),
    name: "Django Unchained",
    year: 2012,
    description:
      "One of Tarataino's best work, Jamie Foxx doing his thing, Cristoph Waltz with an all time performance",
  },
  {
    id: uuid(),
    name: "La La Land",
    year: 2017,
    description: "Lipe's favorite movie, Emma Stone and Ryan Gosling",
  },
  {
    id: uuid(),
    name: "Inglorious Basterds",
    year: 2009,
    description:
      "Another Tarantino masterpiece, breathtaking since the first scene and another all timer by Cristoph Waltz",
  },
];

app.get("/movies", (req, res) => {
  res.render("movies/index", { movieList });
});

app.post("/movies", (req, res) => {
  const { name, year, description } = req.body;
  const newMovie = { name, year, description, id: uuid() };
  movieList.push(newMovie);
  res.redirect("/movies");
});

app.get("/movies/new", (req, res) => {
  res.render("movies/new");
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movieList.find((m) => m.id === id);
  res.render("movies/show", { movie });
});

app.get("/movies/:id/edit", (req, res) => {
  const { id } = req.params;
  const movie = movieList.find((m) => m.id === id);
  res.render("movies/edit", { movie });
});

app.patch("/movies/:id", (req, res) => {
  const { id } = req.params;
  const newDescription = req.body.description;
  const movie = movieList.find((m) => m.id === id);
  movie.description = newDescription;
  res.redirect("/movies");
});

app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  movieList = movieList.filter((m) => m.id !== id);
  res.redirect("/movies");
});

app.listen(9000, () => {
  console.log("listening on port 9000");
});
