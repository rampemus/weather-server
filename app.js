const express = require('express')
const app = express()
const cors = require('cors')

const mockData = require('./mockData.json')

app.use(cors())

app.use(express.static('build'))

//mock-server
app.get('/wfs', ( request, response) => {
    response.send(mockData)
})



module.exports = app
