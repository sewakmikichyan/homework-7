const cars = require("../models/carsModel");
const Car = require("../models/CarClass");

module.exports.getCar = (numbers) => {
    return cars.find(car => car.numbers == numbers);
};

module.exports.addCar = ({ mark, year, numbers }) => {
    if (!mark || !year || !numbers) {
        return "The request is not enough!";
    } else if (cars.find(car => car.numbers === numbers)) {
        return "A car with that numbers already has an account!";
    } else {
        cars.push(new Car(mark, year, numbers));
        return "Success";
    }
}

module.exports.deleteCar = (numbers) => {
    const car = cars.find(car => car.numbers == numbers);
    if (car) {
        const carIndex = cars.indexOf(car);
        cars.splice(carIndex, 1);
        return "Deleted success";
    } else {
        return "car not found";
    }
}