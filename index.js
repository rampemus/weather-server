const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const PORT = 3001
const server = http.createServer(app)

if ( config.END_TO_END_TESTING === 'STATIC_BUILD' )
    console.log('End to end testing is available in front end')
if ( config.END_TO_END_TESTING === 'DEV_MODE')
    console.log('Use front end from port 3000 in dev mode to use mock server')

server.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
