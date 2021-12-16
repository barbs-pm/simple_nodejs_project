import User from '../models/User'

const userService = {

    async createUser (user) {

        const createUser = await User.create({
            name: user.name, 
            birthday: user.birthday, 
            address: user.address, 
            phone: user.phone, 
            email: user.email, 
            cpf: user.cpf, 
            type: user.type
        });

        return createUser;

    }

}

export default userService;