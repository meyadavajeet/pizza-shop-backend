const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('colors');
const PizzaModel = require('./models/PizzaModel');
const PizzaData = require('./data/pizza-data');
const connectDbs = require('./config/config');

//config dotenv and mongodb connection file
dotenv.config();
connectDbs();

//importData
const importData = async () => {
    try {
        await PizzaModel.deleteMany();
        const sampleData = PizzaData.map((pizza) => {
            return { ...pizza }
        });
        await PizzaModel.insertMany(sampleData);
        console.log(`Data Imported`.bgGreen.white);
        process.exit();
    } catch (error) {
        console.log(`${error.message}`.bgRed.white);
        process.exit(1);
    }
};

const dataDestroy = () => { };

if (process.argv[2] === "-d") {
    dataDestroy();
} else {
    importData();
}