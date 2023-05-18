const model = require('../models/userLogin')

const getLoginUser = async (user, password) => {

    const response = await model.find({
        user: user,
        password: password
    });

    return response
}


const postUser = async (data) => {
    
    const { user, password } = data;
    
    const newuser = await model.create({ user, password })
    
    return newuser
}


module.exports = {
    getLoginUser,
    postUser
}