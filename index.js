const express = require('express')
const app = express()
var request = require('request')
const bodyParser = require('body-parser')


const accountSid = "AC733a0973aeff57a329419abb54ea3817"
const authToken = "bb1e2dc4776707813f95f23c0424d808"

const client = require('twilio')(accountSid, authToken)
const messageResponse = require('twilio').twiml.MessagingResponse


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/req', (req, res) => {

const twiml = new messageResponse()
var msg = twiml.message(req.body.body)
res.writeHead(200, { 'Content-Type':'text/xml' })
res.end(twiml.toString())
console.log(req.body)
})


app.get('/', (req, res) => {
    res.send("welcome")
})

app.listen(3000)