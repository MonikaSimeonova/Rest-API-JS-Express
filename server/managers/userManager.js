const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async(userData) => {
    User.create(userData);
}
   
exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email: email });

    if (!user) {
        throw new Error('Invalid username or password')
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password')
    }
    const payload = {
        _id: user._id,
        email: user.email
    }
    const token = jwt.sign(payload, 'SECRETjfjdjdjd', { expiresIn: '2d' });

    const result = {
        userId: user._id,
        email: user.email,
        authToken: token,
    }
    return result
    
}

function getAuthResult(user){

}