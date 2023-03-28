const DBControllerInterface =  require("../interfaces/DBControllerInterface.js")

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
}