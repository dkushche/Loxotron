class DBControllerInterface {
    constructor() {
        if (!this.connect) {
            throw new Error ("No connect method")
        }
        if(!this.create_user){
            throw new Error ("User creation error")
          }
    }
}

module.exports = DBControllerInterface
