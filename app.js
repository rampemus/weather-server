const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mockDataHelper = require('./utils/mockDataHelper')
const acceptedCity = require('./utils/validCities')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

app.get('/wfs/:location', ( request, response) => {
    const location = request.params.location
    //TODO: if location is not valid: send
    //[{errorCode:400, errorText:'Bad Request', extension:{start: ..., end: ...}},{errorCode:400, errorText:'Bad Request',extension:{start: ..., end: ...}}]

    if ( acceptedCity(location) ) {
        response.send(mockDataHelper(location))
    } else {
        response.status(400).send([
            {
                errorText: 'Bad Request',
                extension: { start:'...', end: '...' }
            },
            {
                errorText: 'Bad Request',
                extension: { end: '...', start:'...' }
            }
        ])
    }
})

module.exports = app
