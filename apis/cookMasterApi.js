const Product = require("../models/cookMaster");

module.exports = {
  create,
  list,
  deleteAll,
  validate,
};

async function create(req, res, next) {
  const product = await Product.create(req.body);
  res.json(product);
}

async function validate(req, res, next) {
  const product = await Product.validate(req.body.email, req.body.password);
  res.json(product);
}

async function list(req, res, next) {
  const product = await Product.list();
  res.json(product);
}

async function deleteAll(req, res, next) {
  const product = await Product.deleteAll();
  res.json(product);
}
