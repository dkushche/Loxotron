const create_server = require('./server')

const db_config = require("./config/db.js")

const MongoDBController = require("./controllers/MongoDBController.js")

const server = create_server(new MongoDBController(), db_config["DB_URL"])

const port = process.env.PORT || 5000

const startServer = () => {
    server.listen(port, () => {
        console.log(`SERVER STARTED ON PORT ${port}`)
    })
}

startServer()
