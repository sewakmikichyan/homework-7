const express = require("express");
const carsController = require("../controllers/carsController.js");

const router = express.Router();

router.get('/', carsController.getAllCars);
router.get('/car', carsController.getCar);
router.post('/', carsController.addCar);
router.delete('/', carsController.deleteCar);

module.exports = router;