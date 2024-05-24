const express = require('express');
const {
    getHomePage,
    getUser,
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/user', getUser);

module.exports = router;