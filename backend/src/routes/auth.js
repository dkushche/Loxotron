function create_router(db_controller){
    const router = require("express").Router()
    
    router.post('/register',(req, res) => {
        const {username,password} = req.body

         const err = db_controller.create_user(username,password)
        
        if (err) {
            res.status(500).send({"reason": `User creation error: ${err}`})
        } else {
            res.send({"refresh_token": "$base64token"})
        }
    })

    return router
}
    
    
    


module.exports = create_router

