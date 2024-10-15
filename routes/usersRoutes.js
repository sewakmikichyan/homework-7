const express = require("express");
const userController = require("../controllers/usersController.js");

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/user', userController.getUser);
router.post('/', userController.addUser);
router.delete('/', userController.deleteUser);

module.exports = router;