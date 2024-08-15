const db = require("../db");
const id = require("cuid");

const Product = db.model("cooksMaster", {
  _id: { type: String, default: id },
  cook_name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone_no: { type: String, unique: true, required: true },
});

module.exports = {
  create,
  list,
  deleteAll,
  validate,
};

async function create(body) {
  try {
    const product = await Product.create(body);
    return product;
  } catch (err) {
    return err;
  }
}

async function list() {
  const product = await Product.find({});
  return product;
}

async function deleteAll() {
  const product = await Product.deleteMany({});
  return product;
}

async function validate(email, password) {
  const product = await Product.find({ email: email, password: password });
  if (product.length != 0) {
    return { success: true, data: product };
  } else {
    return { success: false, data: {} };
  }
}
