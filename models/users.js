const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    salt: String,
    password: String,
    token: String,
    // articles: [{type: mongoose.Schema.Types.ObjectId, ref: 'articles'}]

})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel