const create_router = require("./routes/auth")
const bodyParser = require('express')

function create_server(db_controller, db_url) {
    db_controller.connect(db_url)

    const app = require('express')()
    const router = create_router(db_controller)

    app.use(bodyParser.json())
    app.use(router)

    app.get('/*', (req, res) => {
        res.status(500).json('Fuck you leather man')
    })

    return app
}

module.exports = create_server
