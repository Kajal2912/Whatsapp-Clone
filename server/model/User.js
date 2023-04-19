const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    iss: {
        type: String
    },
    nbf: {
        type: Number
    },
    aud: {
        type: String
    },
    sub: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    email_verified: {
        type: Boolean
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    given_name: {
        type: String
    },
    family_name: {
        type: String
    },
    iat: {
        type: String
    },
    exp: {
        type: String
    },
    jti: {
        type: String
    },
})

const user = mongoose.model('User', userSchema);

module.exports = user