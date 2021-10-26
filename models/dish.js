const mongoose = require("mongoose");

const dishschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  category: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  ingredients: {
    type: [
      {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
      },
    ],
    default: [],
  },
  price: { type: Number, required: true },
  dateMotified: { type: Date, default: Date.now },
});

const Dish = mongoose.model("Dish", dishschema);

module.exports = Dish;
