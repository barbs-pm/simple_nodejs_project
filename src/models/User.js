import sequelize, { STRING } from "sequelize"
import connection from "../database/connection"

const User = connection.define('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
    },
    name: {
        type: sequelize.STRING
    },
    birthday: {
        type: sequelize.DATE
    },
    address: {
        type: sequelize.STRING
    },
    phone: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    },
    cpf: {
        type: sequelize.STRING
    },
    type: {
        type: sequelize.INTEGER
    }
})

User.sync({
    force:false
})

export default User

// class User{
//     constructor(id, name, birthday, address, phone, email, cpf, type){
//         this.id = id,
//         this.name = name,
//         this.birthday = birthday,
//         this.address = address,
//         this.phone = phone,
//         this.email = email,
//         this.cpf = cpf,
//         this.type = type
//     }
// }