import express from 'express'
import mongoose from 'mongoose'

const db_url = "mongodb://root:example@loxotron_backend_db:27017"

mongoose.connect(db_url)
const db = mongoose.connection

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

const PORT = 5000
const app = express()

app.get('/*', (req, res) => {
    res.status(200).json('Hello World!')
})

app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT))
