const supertest = require('supertest')
const app = require('../app')

const mockApi = supertest(app)

describe('Mock test', () => {
    test('Server responds data', async() => {
        const response = await mockApi
            .get('/wfs/Helsinki')
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(response.body.info.begin).toBeDefined()
        expect(response.body.info.end).toBeDefined()
    })

    test('info begin-date matches with current date', async() => {
        const response = await mockApi
            .get('/wfs/Helsinki')

        const now = new Date()
        const begin = new Date(response.body.info.begin)
        const timeDifference = Math.abs( now - begin )/60/60/1000

        //data should be about following days
        expect(timeDifference < 2).toBe(true)
    })

    test('info end date is bigger than begin date', async() => {
        const response = await mockApi
            .get('/wfs/Helsinki')

        const begin = new Date(response.body.info.begin)
        const end = new Date(response.body.info.end)
        expect( begin < end).toBe(true)
    })

    test('info time frame should be between 1-7 days', async() => {
        const response = await mockApi
            .get('/wfs/Helsinki')

        const begin = new Date(response.body.info.begin)
        const end = new Date(response.body.info.end)

        const timeDifference = Math.abs( end - begin )/24/60/60/1000

        // console.log('timeDifference', timeDifference)

        expect(timeDifference < 10).toBe(true)
    })
})
