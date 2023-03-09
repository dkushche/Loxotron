const db_config = require('./config/db')

const mongoose = require('mongoose')

mongoose.set("strictQuery", false)

mongoose.connect(
    db_config["DB_URL"],
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
    console.log('Database connected successfully');
})
