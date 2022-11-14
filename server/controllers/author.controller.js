const Author = require("../models/author.model");
module.exports.index = (req, res) => {
  res.json({
    message: "API Index",
  });
};
