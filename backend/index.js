import express, { Router } from 'express'
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

app.get('/register', (req, res) => {
    res.send({ "refresh_token": "$base64token" })

})
 
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName:String,
    lastName:String
  });
  
  // Создание модели пользователя
  const User = mongoose.model('User', userSchema)
  
  
  app.use(bodyParser.urlencoded({ extended: true }))
  
  
  app.post('/register', function(req, res) {
    // Обработка полученных данных из формы
    const { username, password } = req.body
  
    // Создание нового пользователя
    const newUser = new User({ username, password })
    // Хэширование пароля перед сохранением в базу данных

    userSchema.pre('save', function(next) {

    const user = this

    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err)

      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err)

        user.password = hash

        next()
      })
    })
  })
  
    // Сохранение пользователя в базе данных
    newUser.save(function(err) {
      if (err) {
        // Отправка ошибки в ответе
        res.status(500).send("reason : " +  "User creation error")
      } else {
        // Отправка сообщения об успешном создании пользователя в ответе
        res.send('Пользователь создан успешно')
      }
    })
  })
