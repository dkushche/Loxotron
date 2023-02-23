const router = require("express").Router()
const UserModel = require("../models/user.js")

router.post('/register', (req, res) => {
    const { username, password } = req.body

    const newUser = new UserModel({
        username: username,
        password: password,
        firstName: '',
        lastName: '',
        location: '',
        dateOfBirth: '',
        img: {
            data: new Buffer.alloc(0),
            contentType: ''
        }
    })

    newUser.save(function(err) {
        if (err) {
            res.status(500).send({"reason": `User creation error: ${err}`})
        } else {
            res.send({"refresh_token": "$base64token"})
        }
    })
})

module.exports = router
