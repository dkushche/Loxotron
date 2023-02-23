let mongoose = require('mongoose')
let UserModel = require('../src/models/user')

let chai = require('chai')
let should = chai.should()
let chaiHttp = require('chai-http')

let server = require('../src/server')

chai.use(chaiHttp)

describe('Register', () => {

    beforeEach((done) => {
        UserModel.remove({}, (err) => {
            done()
        })
    })

    describe('Successful registration', () => {
        it('Should register new user and get refresh token', (done) =>  {
            const user = {
                username: "pbateman",
                password: "i_love_huey_lewis"
            }

            chai.request(server)
                .post('/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('refresh_token').eql('$base64token');
                    done()
                })
        })
    })
})
