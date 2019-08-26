const timeValueHelper = require('./timeValueHelper')

const createForecastData = (location) => {
    const begin = new Date()
    const end = new Date(new Date().getTime() + 7*24*60*60*1000)

    // console.log(location)

    const result = {
        'info': {
            'begin': begin,
            'end': end
        },
        'properties': {
            'Temperature': {
                'label': 'Air temperature',
                'unit': 'degC',
                'phenomenon': 'Temperature',
                'statisticalFunction': '',
                'statisticalPeriod': ''
            },
            'Humidity': {
                'label': 'Humidity',
                'unit': '%',
                'phenomenon': 'Humidity',
                'statisticalFunction': '',
                'statisticalPeriod': ''
            },
            'WindDirection': {
                'label': 'Wind direction',
                'unit': 'deg',
                'phenomenon': 'Wind',
                'statisticalFunction': 'avg',
                'statisticalPeriod': 'PT1H'
            },
            'WindSpeedMS': {
                'label': 'Wind speed',
                'unit': 'm/s',
                'phenomenon': 'Wind',
                'statisticalFunction': 'avg',
                'statisticalPeriod': 'PT1H'
            }
        },
        'locations': [{
            'info': {
                'id': '658225',
                'geoid': '658225',
                'wmo': '',
                'fmisid': '',
                'name': 'Helsinki',
                'region': 'Finland',
                'country': 'Finland',
                'timezone': 'Europe/Helsinki',
                'position': ['60.16952', '24.93545']
            },
            'data': timeValueHelper(location).data
        }]
    }

    return result
}

module.exports = createForecastData
