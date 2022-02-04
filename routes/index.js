const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((results) => {
      res.render("movies", { allMovies: results });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/details/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((results) => {
      res.render("details", results);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

module.exports = router;
