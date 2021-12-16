import { Sequelize } from "sequelize";

const connection = new Sequelize('auau', 'sa', '123456', {
    host:'localhost',
    dialect:'postgres'
})

export default connection