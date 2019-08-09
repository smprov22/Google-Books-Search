const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .then(bookData => res.json(bookData))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(bookData => res.json(bookData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(bookData =>{ 
        res.json(bookData)})
      .catch(err => res.status(422).json(err));+
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(bookData => res.json(bookData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(bookData => bookData.remove())
      .then(bookData => res.json(bookData))
      .catch(err => res.status(422).json(err));
  }
};
