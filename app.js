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
    //TODO: if location is not valid: send
    //[{errorCode:400, errorText:'Bad Request', extension:{start: ..., end: ...}},{errorCode:400, errorText:'Bad Request',extension:{start: ..., end: ...}}]
    //valid cities:
    /*Helsinki, Espoo, Tampere, Vantaa, Oulu, Turku, Jyväskylä, Lahti, Kuopio, Pori, Kouvola, Joensuu, Lappeenranta, Vaasa, Hämeenlinna, Seinäjoki, Rovaniemi, Mikkeli, Kotka, Salo, Porvoo, Kokkola, Hyvinkää, Lohja, Järvenpää, Nurmijärvi, Rauma*/
    response.send(mockDataHelper(location))
})

module.exports = app
