const { Dish, validate } = require("../models/dish");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const dishes = await Dish.find();
    return res.send(dishes);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish)
      return res
        .status(400)
        .send(`The dish with id "${req.params.id}" does not exist.`);
    return res.send(dish);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

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

router.put("/:id", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);
    const dish = await Dish.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        ingredients: req.body.ingredients,
        price: req.body.price,
        altprice: req.body.altprice,
      },
      { new: true }
    );
    if (!dish)
      return res
        .status(400)
        .send(`The dish with id "${req.params.id}" does not exist`);
    await dish.save();

    return res.send(dish);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const dish = await Dish.findByIdAndRemove(req.params.id);
    if (!dish)
      return res
        .status(400)
        .send(`The dish with id "${req.params.id}" does not exist.`);
    return res.send(dish);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
