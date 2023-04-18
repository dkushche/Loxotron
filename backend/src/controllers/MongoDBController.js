const DBControllerInterface =  require("../interfaces/DBControllerInterface.js")
const UserModel = require("../models/user")

class MongoDBController extends DBControllerInterface {
    constructor() {
       super()
       this.connected = false
    }

    connect(db_url) {
        const mongoose = require('mongoose')

        mongoose.set("strictQuery", false)

        mongoose.connect(db_url,
            {
                connectTimeoutMS: 1000,
            }
        ).catch(
            err => console.log(`Database initial connection error: ${err}`)
        )

        const connection = mongoose.connection

        connection.on('error', (err) => {
            console.log(`Database connection error: ${err}`)
        })

        connection.once('connected', () => {
            this.connected = true
            console.log('Database connected successfully');
        })
    }

     async create_user(username, password) {
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
        const err = await newUser.save().catch(err => err)
        
        return err
    
    }
}

module.exports = MongoDBController
