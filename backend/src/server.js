require("./database")

const authRoutes = require("./routes/auth")
const bodyParser = require('express')

const app = require('express')()

app.use(bodyParser.json())
app.use(authRoutes)

app.get('/*', (req, res) => {
    res.status(500).json('Fuck you leather man')
})

module.exports = app
