const getHomePage = (req, res) => {
    return res.send("hello world");
}

module.exports = {
    getHomePage: getHomePage,
}