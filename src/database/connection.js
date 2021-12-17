const { Sequelize } = require('sequelize');

const connection = new Sequelize('auau', 'tonatto', '123456', {
    host:'localhost',
    dialect:'postgres'
})

module.exports = connection