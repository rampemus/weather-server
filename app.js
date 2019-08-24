const express = require('express')
const app = express()
const cors = require('cors')

const mockData = require('./mockData.json')

app.use(cors())

//mock-server
app.get('/wfs', ( request, response) => {
    response.send(mockData)
})

app.get('/', (request, response) => {
    response.send('<h1>Hello There!</h1>')
})

module.exports = app
