const db = require("../models");

exports.getIndexProduct = async (req, res, next) => {
  const movies = await db.movies.findAll({ limit: 6});
  res.render("category/index", {movies: movies});
};

exports.getContact = (req, res, next) => {
  res.render("contact", { isLogin: req.isAuthenticated() });
};

exports.getMovieDetail = async (req, res, next) => {

  const movie  = await db.movies.findOne({ where : { id: req.params.id}});
  res.render("movie-page-full", { movie });
}
