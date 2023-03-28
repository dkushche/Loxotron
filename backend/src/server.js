const authRoutes = require("./routes/auth")
const bodyParser = require('express')

function create_server(db_controller, db_url) {
    db_controller.connect(db_url)

    const app = require('express')()

    app.use(bodyParser.json())
    app.use(authRoutes)

    app.get('/*', (req, res) => {
        res.status(500).json('Fuck you leather man')
    })

    return app
}

module.exports = create_server
