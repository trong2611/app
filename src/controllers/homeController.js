const db = require("../models/index")

const getHomePage = (req, res) => {
    return res.send("hello world");
}

const getUser = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.send(`${data[0].id}, ${data[0].email}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getHomePage: getHomePage,
    getUser: getUser,
}