const { Sequelize } = require('sequelize');

const connection = new Sequelize('appdb', 'appuser', '123456', {
    host:'localhost',
    dialect:'postgres'
})

module.exports = connection