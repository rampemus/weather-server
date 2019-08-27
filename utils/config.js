require('dotenv').config()

const PORT = process.env.PORT

const END_TO_END_TESTING = process.env.END_TO_END_TESTING || 'STATIC_BUILD'

module.exports = {
    PORT,
    END_TO_END_TESTING
}
