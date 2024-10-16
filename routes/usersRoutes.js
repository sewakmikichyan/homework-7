const express = require("express");
const usersController = require("../controllers/usersController.js");

const router = express.Router();

router.get('/', usersController.getAllUsers);
router.get('/user', usersController.getUser);
router.post('/', usersController.addUser);
router.delete('/', usersController.deleteUser);

module.exports = router;