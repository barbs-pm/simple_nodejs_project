const express = require('express')
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/user', (request, response) => {
    userController.registerUser(request, response)
})

module.exports = router