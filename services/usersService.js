const users = require("../models/usersModel");
const User = require("../models/UserClass");

module.exports.getUser = (id) => {
    return users.find(user => user.id == id);
};

module.exports.addUser = ({ name, lastname, age, id }) => {
    if (!name || !lastname || !age || !id) {
        return "The request is not enough!";
    } else if (users.find(user => user.id === id)) {
        return "A user with that id already has an account!";
    } else {
        users.push(new User(name, lastname, age, id));
        return "Success";
    }
}

module.exports.deleteUser = (id) => {
    const user = users.find(user => user.id == id);
    if (user) {
        const userIndex = users.indexOf(user);
        console.log(userIndex);
        users.splice(userIndex, 1);
        return "Deleted success";
    } else {
        return "user not found";
    }
}