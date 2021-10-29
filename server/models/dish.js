const mongoose = require("mongoose");
const Joi = require("joi");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  ingredients: { type: Array, required: true },
  price: { type: Number, required: true },
  altprice: { type: Number, required: true },
  dateMotified: { type: Date, default: Date.now },
});

const Dish = mongoose.model("Dish", dishSchema);

function validateDish(dish) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().required(),
    category: Joi.string().min(2).max(255).required(),
    ingredients: Joi.array().required(),
    price: Joi.number().required(),
    altprice: Joi.number().required(),
  });
  return schema.validate(dish);
}

exports.Dish = Dish;
exports.validate = validateDish;
exports.dishschema = dishSchema;
