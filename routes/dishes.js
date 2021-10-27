const { Dish, validate } = require("../models/dish");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);

    const dish = new Dish({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      ingredients: req.body.ingredients,
      price: req.body.price,
      altprice: req.body.altprice,
    });
    await dish.save();

    return res.send(dish);
  } catch (ex) {
    return res.send(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
