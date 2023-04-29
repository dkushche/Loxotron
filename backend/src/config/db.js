const DB_DOMAIN = "loxotron_backend_db"
const DB_PORT = "27017"

const DB_USER = "root"
const DB_PASSWORD = "example"

const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_DOMAIN}:${DB_PORT}`

module.exports = {
    DB_URL
}
