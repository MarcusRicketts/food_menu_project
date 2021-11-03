const mongoose = require("mongoose");
const Joi = require("joi");
const { array, string } = require("joi");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 1
    maxlength:1000
  },
  category: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  ingredients: [],
  price: { type: Number, required: true },
  altprice: { type: Number, required: true },
  dateMotified: { type: Date, default: Date.now },
});

const Dish = mongoose.model("Dish", dishSchema);

function validateDish(dish) {
  const schema = Joi.object({
    name: Joi.string().min(1).max(255).required(),
    description: Joi.string().min(1).max(1000).required(),
    category: Joi.string().min(1).max(255).required(),
    ingredients: Joi.array().items(Joi.string().min(1).max(255).required()),
    price: Joi.number().required(),
    altprice: Joi.number().required(),
  });
  return schema.validate(dish);
}

exports.Dish = Dish;
exports.validate = validateDish;
exports.dishschema = dishSchema;
