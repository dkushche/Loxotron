const DBControllerInterface = require('../../src/interfaces/DBControllerInterface')

class MockDBController extends DBControllerInterface {
    constructor() {
        super()
        this.connected = false
        this.users = {}
    }

    connect(db_url) {
        this.connected = true
    }

    create_user(username, password) {
        this.users[username] = password

        return null
    }
}

module.exports = MockDBController
