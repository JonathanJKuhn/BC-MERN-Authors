const Author = require("../models/author.model");
module.exports.index = (req, res) => {
  res.json({
    message: "API Index",
  });
};

module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((author) => res.status(201).json(author))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAllAuthors = (req, res) => {
  Author.find()
    .sort({ name: 1 })
    .then((authors) => res.json(authors))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((author) => res.json(author))
    .catch((err) => {
      err["message"] = "Could not find author with given id";
      res.status(404).json(err);
    });
};

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.status(400).json(err));
};
