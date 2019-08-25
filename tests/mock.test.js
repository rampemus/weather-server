const supertest = require('supertest')
const app = require('../app')

const mockApi = supertest(app)

describe('Mock test', () => {
    test('Mock server responds data', async() => {
        const response = await mockApi
            .get('/wfs')
            .expect(200)
            .expect('Content-Type', /application\/json/)

        console.log(response.body.info)
        expect(response.body.info.begin).toBeDefined()
        expect(response.body.info.end).toBeDefined()
    })
})
