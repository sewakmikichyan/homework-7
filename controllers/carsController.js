const cars = require('../models/carsModel');
const carsService = require("../services/carsService");

module.exports.getAllCars = (req, res) => {
    try {
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getCar = (req, res) => {
    const { numbers } = req.query;

    const car = carsService.getcar(numbers);

    try {
        if (car) {
            res.status(200).json(car);
        } else {
            res.status(404).send(`"${numbers}" car not found 404!`);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.addCar = (req, res) => {
    const newCarData = req.query;
    const description = carsService.addCar(newCarData);

    try {
        res.send(description);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

module.exports.deleteCar = (req, res) => {
    const { numbers } = req.query;
    const description = carsService.deleteCar(numbers);

    try {
        res.send(description);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
}