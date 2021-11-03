const mongoose = require('mongoose');

const PizzaSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    varients: [],
    prices: [],
    category: {
        type: 'string',
        required: true,
    },
    image: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    }
}, { timestamps: true });

const PizzaModel = mongoose.model('Pizza', PizzaSchema);
module.exports = PizzaModel;