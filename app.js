const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mockDataHelper = require('./utils/mockDataHelper')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

//mock-server
app.get('/wfs/:location', ( request, response) => {
    const location = request.params.location
    response.send(mockDataHelper(location))
})

module.exports = app
