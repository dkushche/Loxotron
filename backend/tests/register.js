const { assert } = require('chai')
let chai = require('chai')
let should = chai.should()
let chaiHttp = require('chai-http')

const create_server = require('../src/server')

const MockDBController = require("./mocks/MockDBController")

chai.use(chaiHttp)


describe('Register', () => {

    describe('Successful registration', () => {
        it('Should register new user and get refresh token', (done) =>  {
            const user = {
                username: "pbateman" ,
                password: "i_love_huey_lewis"
            }

            const mockdbcontroller = new MockDBController()

            const server = create_server(mockdbcontroller, "test123")

            assert.equal(mockdbcontroller.connected, true)

            chai.request(server)
                .post('/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('refresh_token').eql('$base64token')
                    assert.equal(mockdbcontroller.users[user["username"]], user["password"])
                    done()
                })
        })
    })
})
