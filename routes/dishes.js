const Dish = require("../models/dish");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dish = new Dish({
      name: "Original Cheesecake",
      description: `The One That Started it All! Our Famous Creamy Cheesecake with a Graham Cracker Crust and Sour Cream Topping.`,
      category: "Dessert",
      ingredients: ["sour cream", "cream cheese"],
      price: 7.99,
      altprice: 20.99,
    });
    await dish.save();

    return res.send(dish);
  } catch (ex) {
    return res.send(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
