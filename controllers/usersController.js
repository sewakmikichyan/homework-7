const users = require('../models/usersModel');
const usersService = require("../services/usersService");

module.exports.getAllUsers = (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getUser = (req, res) => {
    const { id } = req.query;

    const user = usersService.getUser(id);

    try {
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send(`"${id}" user not found 404!`);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.addUser = (req, res) => {
    const newUserData = req.query;
    const description = usersService.addUser(newUserData);

    try {
        res.send(description);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

module.exports.deleteUser = (req, res) => {
    const { id } = req.query;
    const description = usersService.deleteUser(id);

    try {
        res.send(description);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
}