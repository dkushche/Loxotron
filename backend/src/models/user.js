const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    location: String,
    dateOfBirth: Date,
    img: {
        data: Buffer,
        contentType: String
    }
})

userSchema.pre('save', function (next) {
    const user = this
    const saltRounds = 10

    if (user.isModified('password')) {
        bcrypt
        .genSalt(saltRounds)
        .then(salt => {
            return bcrypt.hash(user.password, salt)
        })
        .then(hash => {
            user.password = hash
        })
        .catch(err => console.error(err.message))
    }

    next()
})

module.exports = mongoose.model("UserModel", userSchema)
