class DBControllerInterface {
    constructor() {
        if (!this.connect) {
            throw new Error ("No connect method")
        }
    }
}

module.exports = DBControllerInterface
