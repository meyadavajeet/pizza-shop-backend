const express = require('express');
const router = express.Router();
const PizzaModel = require('../models/PizzaModel');

/*
*@GET REQUEST
*GET ALL PIZZAS
*/
router.get("/get-all-pizzas", async (req, res) => {
	try {
		let pizzas = await PizzaModel.find({});
		res.send(pizzas);
	} catch (err) {
		res.json({ message: err + "Something went wrong." });
	}

});
module.exports = router;
