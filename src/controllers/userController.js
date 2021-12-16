import User from '../models/User'
import userService from '../services/userService'

const userController = {
    registerUser(request, response){
        const userBody = request.body.user

        User.findOne ({
            where :{
                cpf:userBody.cpf,
            }
        }).then(user => {
            if(!user) {
                userService.createUser(userBody)
                .then((result) => {
                    return response.status(201).json("Usuário criado <3");
                })
                .catch(err => {
                    return response.status(500).json("Erro ao criar o cadastro :(");
                });
            } else {
                return response.status(400).json("Usuário já existente.");
            }
        })
    }
}