const express = require('express');
const router = express.Router();
const PizzaModel = require('../models/PizzaModel');

/*
@GET REQUEST
GET ALL PIZZAS
*/
router.get("/get-all-pizzas",async (req, res) => {
  try {
    const pizzas = await PizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({message: error + "Something went wrong."});
  }

});
module.exports = router;