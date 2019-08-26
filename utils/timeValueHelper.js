const modifyAllValuePairs = ( location ) => {
    //mock data has been collected at 1566712800000

    //first let's go back in time to beginning of 1970
    let list = forecast.data.Temperature.timeValuePairs
    addTime(list, -1566712800000)


    list = forecast.data.Humidity.timeValuePairs
    addTime(list, -1566712800000)

    list = forecast.data.WindDirection.timeValuePairs
    addTime(list, -1566712800000)

    list = forecast.data.WindSpeedMS.timeValuePairs
    addTime(list, -1566712800000)

    const now = new Date()
    const extraHoursInData = now.getHours() - new Date(1566712800000).getHours()
    //console.log('From data we need to subtract ' +  extraHoursInData + ' amount of data pairs starting from beginning')

    list = forecast.data.Temperature.timeValuePairs
    addTime(list, -extraHoursInData*60*60*1000)
    deleteDataPairsFromBeginning(list,extraHoursInData)

    // console.log(list)

    list = forecast.data.Humidity.timeValuePairs
    addTime(list, -extraHoursInData*60*60*1000)
    deleteDataPairsFromBeginning(list,extraHoursInData)

    list = forecast.data.WindDirection.timeValuePairs
    addTime(list, -extraHoursInData*60*60*1000)
    deleteDataPairsFromBeginning(list,extraHoursInData)

    list = forecast.data.WindSpeedMS.timeValuePairs
    addTime(list, -extraHoursInData*60*60*1000)
    deleteDataPairsFromBeginning(list,extraHoursInData)

    //great Schott! let's go back to the future!
    //exactly to the next even hour of now
    const nextEvenHour = now.valueOf() - now.valueOf()%3600000
    console.log(new Date(nextEvenHour))
    list = forecast.data.Temperature.timeValuePairs
    addTime(list, nextEvenHour)
    // console.log(list)

    list = forecast.data.Humidity.timeValuePairs
    addTime(list, nextEvenHour)


    list = forecast.data.WindDirection.timeValuePairs
    addTime(list, nextEvenHour)


    list = forecast.data.WindSpeedMS.timeValuePairs
    addTime(list, nextEvenHour)

    //make it colder in anywhere else than Helsinki

    list = forecast.data.Temperature.timeValuePairs
    addAllValues(list, ( location === 'Helsinki' ? 0 : -location.length ))
    //make it more Humidity
    list = forecast.data.Humidity.timeValuePairs
    addAllValues(list, location === 'Helsinki' ? 0 : 5)
    //rotate windDirection 90 degree if not in Helsinki
    list = forecast.data.WindDirection.timeValuePairs
    addAllValues(list, location === 'Helsinki' ? 0 : 90)
    //make it a bit more windy
    list = forecast.data.Temperature.timeValuePairs
    addAllValues(list, location === 'Helsinki' ? 0 : location.length)
}

const addTime = (list, time) => {
    for ( let i = 0; i < list.length; i++ ) {
        list[i].time = list[i].time + time
    }
}

const addAllValues = ( list, x ) => {
    for ( let i = 0; i < list.length; i++ ) {
        list[i].value = list[i].value + x
    }
}

//TODO:replace this with list.splice(n)
const deleteDataPairsFromBeginning = (list, n) => {
    while ( n < 0 ) {
        n += 24
    }
    for ( let i = 0; i < n; i++ ) {
        list.shift()
    }
}

let forecast = ''
const timeCorrectedPairs = (location) => {
    console.log('need to make changes for ' + location)

    forecast = {
        'data': {
            'Temperature': {
                'property': {
                    'label': 'Air temperature',
                    'unit': 'degC',
                    'phenomenon': 'Temperature',
                    'statisticalFunction': '',
                    'statisticalPeriod': ''
                },
                'timeValuePairs': [
                    {
                        'time': 1566712800000,
                        'value': 13.6
                    }, {
                        'time': 1566716400000,
                        'value': 14.7
                    }, {
                        'time': 1566720000000,
                        'value': 15.4
                    }, {
                        'time': 1566723600000,
                        'value': 15.7
                    }, {
                        'time': 1566727200000,
                        'value': 16.2
                    }, {
                        'time': 1566730800000,
                        'value': 16.8
                    }, {
                        'time': 1566734400000,
                        'value': 17
                    }, {
                        'time': 1566738000000,
                        'value': 17.2
                    }, {
                        'time': 1566741600000,
                        'value': 17.6
                    }, {
                        'time': 1566745200000,
                        'value': 17.5
                    }, {
                        'time': 1566748800000,
                        'value': 17.5
                    }, {
                        'time': 1566752400000,
                        'value': 17.6
                    }, {
                        'time': 1566756000000,
                        'value': 18
                    }, {
                        'time': 1566759600000,
                        'value': 18
                    }, {
                        'time': 1566763200000,
                        'value': 17.4
                    }, {
                        'time': 1566766800000,
                        'value': 17.3
                    }, {
                        'time': 1566770400000,
                        'value': 17.2
                    }, {
                        'time': 1566774000000,
                        'value': 16.4
                    }, {
                        'time': 1566777600000,
                        'value': 16.4
                    }, {
                        'time': 1566781200000,
                        'value': 16
                    }, {
                        'time': 1566784800000,
                        'value': 15.8
                    }, {
                        'time': 1566788400000,
                        'value': 15.6
                    }, {
                        'time': 1566792000000,
                        'value': 15.5
                    }, {
                        'time': 1566795600000,
                        'value': 15.4
                    }, {
                        'time': 1566799200000,
                        'value': 15.7
                    }, {
                        'time': 1566802800000,
                        'value': 16.6
                    }, {
                        'time': 1566806400000,
                        'value': 17.8
                    }, {
                        'time': 1566810000000,
                        'value': 18.7
                    }, {
                        'time': 1566813600000,
                        'value': 19.4
                    }, {
                        'time': 1566817200000,
                        'value': 20.1
                    }, {
                        'time': 1566820800000,
                        'value': 20.7
                    }, {
                        'time': 1566824400000,
                        'value': 21.2
                    }, {
                        'time': 1566828000000,
                        'value': 22
                    }, {
                        'time': 1566831600000,
                        'value': 22.7
                    }, {
                        'time': 1566835200000,
                        'value': 22.7
                    }, {
                        'time': 1566838800000,
                        'value': 23
                    }, {
                        'time': 1566842400000,
                        'value': 22.7
                    }, {
                        'time': 1566846000000,
                        'value': 21.6
                    }, {
                        'time': 1566849600000,
                        'value': 20.6
                    }, {
                        'time': 1566853200000,
                        'value': 19.8
                    }, {
                        'time': 1566856800000,
                        'value': 19.3
                    }, {
                        'time': 1566860400000,
                        'value': 19.3
                    }, {
                        'time': 1566864000000,
                        'value': 19.7
                    }, {
                        'time': 1566867600000,
                        'value': 18.6
                    }, {
                        'time': 1566871200000,
                        'value': 18.9
                    }, {
                        'time': 1566874800000,
                        'value': 18.2
                    }, {
                        'time': 1566878400000,
                        'value': 17.5
                    }, {
                        'time': 1566882000000,
                        'value': 17.2
                    }, {
                        'time': 1566885600000,
                        'value': 17.1
                    }, {
                        'time': 1566889200000,
                        'value': 17.7
                    }, {
                        'time': 1566892800000,
                        'value': 18.2
                    }, {
                        'time': 1566896400000,
                        'value': 18.2
                    }, {
                        'time': 1566900000000,
                        'value': 18.5
                    }, {
                        'time': 1566903600000,
                        'value': 18.9
                    }, {
                        'time': 1566907200000,
                        'value': 19.5
                    }, {
                        'time': 1566910800000,
                        'value': 20.1
                    }, {
                        'time': 1566914400000,
                        'value': 20.1
                    }, {
                        'time': 1566918000000,
                        'value': 20.1
                    }, {
                        'time': 1566921600000,
                        'value': 20.1
                    }, {
                        'time': 1566925200000,
                        'value': 20.3
                    }, {
                        'time': 1566928800000,
                        'value': 20.4
                    }, {
                        'time': 1566932400000,
                        'value': 20.2
                    }, {
                        'time': 1566936000000,
                        'value': 19.9
                    }, {
                        'time': 1566939600000,
                        'value': 19.8
                    }, {
                        'time': 1566943200000,
                        'value': 18.9
                    }, {
                        'time': 1566946800000,
                        'value': 19.3
                    }, {
                        'time': 1566950400000,
                        'value': 19
                    }
                ]
            },
            'Humidity': {
                'property': {
                    'label': 'Humidity',
                    'unit': '%',
                    'phenomenon': 'Humidity',
                    'statisticalFunction': '',
                    'statisticalPeriod': ''
                },
                'timeValuePairs': [
                    {
                        'time': 1566712800000,
                        'value': 90.9
                    }, {
                        'time': 1566716400000,
                        'value': 89
                    }, {
                        'time': 1566720000000,
                        'value': 86.8
                    }, {
                        'time': 1566723600000,
                        'value': 78.5
                    }, {
                        'time': 1566727200000,
                        'value': 66.5
                    }, {
                        'time': 1566730800000,
                        'value': 57.5
                    }, {
                        'time': 1566734400000,
                        'value': 56.4
                    }, {
                        'time': 1566738000000,
                        'value': 57.2
                    }, {
                        'time': 1566741600000,
                        'value': 51.2
                    }, {
                        'time': 1566745200000,
                        'value': 46.4
                    }, {
                        'time': 1566748800000,
                        'value': 38.9
                    }, {
                        'time': 1566752400000,
                        'value': 38
                    }, {
                        'time': 1566756000000,
                        'value': 34.7
                    }, {
                        'time': 1566759600000,
                        'value': 35.3
                    }, {
                        'time': 1566763200000,
                        'value': 54.2
                    }, {
                        'time': 1566766800000,
                        'value': 65.2
                    }, {
                        'time': 1566770400000,
                        'value': 62.5
                    }, {
                        'time': 1566774000000,
                        'value': 77
                    }, {
                        'time': 1566777600000,
                        'value': 82
                    }, {
                        'time': 1566781200000,
                        'value': 85.4
                    }, {
                        'time': 1566784800000,
                        'value': 86.2
                    }, {
                        'time': 1566788400000,
                        'value': 88.6
                    }, {
                        'time': 1566792000000,
                        'value': 90
                    }, {
                        'time': 1566795600000,
                        'value': 91.5
                    }, {
                        'time': 1566799200000,
                        'value': 91.4
                    }, {
                        'time': 1566802800000,
                        'value': 87.4
                    }, {
                        'time': 1566806400000,
                        'value': 81.5
                    }, {
                        'time': 1566810000000,
                        'value': 76.8
                    }, {
                        'time': 1566813600000,
                        'value': 73.6
                    }, {
                        'time': 1566817200000,
                        'value': 70.6
                    }, {
                        'time': 1566820800000,
                        'value': 66.6
                    }, {
                        'time': 1566824400000,
                        'value': 63.7
                    }, {
                        'time': 1566828000000,
                        'value': 58.8
                    }, {
                        'time': 1566831600000,
                        'value': 56.7
                    }, {
                        'time': 1566835200000,
                        'value': 57.5
                    }, {
                        'time': 1566838800000,
                        'value': 56.8
                    }, {
                        'time': 1566842400000,
                        'value': 57.5
                    }, {
                        'time': 1566846000000,
                        'value': 59.1
                    }, {
                        'time': 1566849600000,
                        'value': 60.5
                    }, {
                        'time': 1566853200000,
                        'value': 62.3
                    }, {
                        'time': 1566856800000,
                        'value': 64.8
                    }, {
                        'time': 1566860400000,
                        'value': 67
                    }, {
                        'time': 1566864000000,
                        'value': 69
                    }, {
                        'time': 1566867600000,
                        'value': 76.6
                    }, {
                        'time': 1566871200000,
                        'value': 62.6
                    }, {
                        'time': 1566874800000,
                        'value': 63.9
                    }, {
                        'time': 1566878400000,
                        'value': 63.6
                    }, {
                        'time': 1566882000000,
                        'value': 54.2
                    }, {
                        'time': 1566885600000,
                        'value': 55.1
                    }, {
                        'time': 1566889200000,
                        'value': 49.7
                    }, {
                        'time': 1566892800000,
                        'value': 46.5
                    }, {
                        'time': 1566896400000,
                        'value': 47.2
                    }, {
                        'time': 1566900000000,
                        'value': 45.8
                    }, {
                        'time': 1566903600000,
                        'value': 43.5
                    }, {
                        'time': 1566907200000,
                        'value': 37.4
                    }, {
                        'time': 1566910800000,
                        'value': 35.6
                    }, {
                        'time': 1566914400000,
                        'value': 39.8
                    }, {
                        'time': 1566918000000,
                        'value': 43.9
                    }, {
                        'time': 1566921600000,
                        'value': 50.8
                    }, {
                        'time': 1566925200000,
                        'value': 53.4
                    }, {
                        'time': 1566928800000,
                        'value': 52.6
                    }, {
                        'time': 1566932400000,
                        'value': 52.8
                    }, {
                        'time': 1566936000000,
                        'value': 53.2
                    }, {
                        'time': 1566939600000,
                        'value': 53.2
                    }, {
                        'time': 1566943200000,
                        'value': 54
                    }, {
                        'time': 1566946800000,
                        'value': 45.9
                    }, {
                        'time': 1566950400000,
                        'value': 48.8
                    }
                ]
            },
            'WindDirection': {
                'property': {
                    'label': 'Wind direction',
                    'unit': 'deg',
                    'phenomenon': 'Wind',
                    'statisticalFunction': 'avg',
                    'statisticalPeriod': 'PT1H'
                },
                'timeValuePairs': [
                    {
                        'time': 1566712800000,
                        'value': 101
                    }, {
                        'time': 1566716400000,
                        'value': 119
                    }, {
                        'time': 1566720000000,
                        'value': 159
                    }, {
                        'time': 1566723600000,
                        'value': 222
                    }, {
                        'time': 1566727200000,
                        'value': 214
                    }, {
                        'time': 1566730800000,
                        'value': 217
                    }, {
                        'time': 1566734400000,
                        'value': 218
                    }, {
                        'time': 1566738000000,
                        'value': 220
                    }, {
                        'time': 1566741600000,
                        'value': 220
                    }, {
                        'time': 1566745200000,
                        'value': 221
                    }, {
                        'time': 1566748800000,
                        'value': 222
                    }, {
                        'time': 1566752400000,
                        'value': 224
                    }, {
                        'time': 1566756000000,
                        'value': 220
                    }, {
                        'time': 1566759600000,
                        'value': 216
                    }, {
                        'time': 1566763200000,
                        'value': 219
                    }, {
                        'time': 1566766800000,
                        'value': 236
                    }, {
                        'time': 1566770400000,
                        'value': 245
                    }, {
                        'time': 1566774000000,
                        'value': 249
                    }, {
                        'time': 1566777600000,
                        'value': 243
                    }, {
                        'time': 1566781200000,
                        'value': 245
                    }, {
                        'time': 1566784800000,
                        'value': 248
                    }, {
                        'time': 1566788400000,
                        'value': 254
                    }, {
                        'time': 1566792000000,
                        'value': 259
                    }, {
                        'time': 1566795600000,
                        'value': 257
                    }, {
                        'time': 1566799200000,
                        'value': 252
                    }, {
                        'time': 1566802800000,
                        'value': 253
                    }, {
                        'time': 1566806400000,
                        'value': 247
                    }, {
                        'time': 1566810000000,
                        'value': 237
                    }, {
                        'time': 1566813600000,
                        'value': 234
                    }, {
                        'time': 1566817200000,
                        'value': 237
                    }, {
                        'time': 1566820800000,
                        'value': 241
                    }, {
                        'time': 1566824400000,
                        'value': 242
                    }, {
                        'time': 1566828000000,
                        'value': 250
                    }, {
                        'time': 1566831600000,
                        'value': 254
                    }, {
                        'time': 1566835200000,
                        'value': 300
                    }, {
                        'time': 1566838800000,
                        'value': 301
                    }, {
                        'time': 1566842400000,
                        'value': 296
                    }, {
                        'time': 1566846000000,
                        'value': 300
                    }, {
                        'time': 1566849600000,
                        'value': 307
                    }, {
                        'time': 1566853200000,
                        'value': 310
                    }, {
                        'time': 1566856800000,
                        'value': 319
                    }, {
                        'time': 1566860400000,
                        'value': 331
                    }, {
                        'time': 1566864000000,
                        'value': 358
                    }, {
                        'time': 1566867600000,
                        'value': 29
                    }, {
                        'time': 1566871200000,
                        'value': 61
                    }, {
                        'time': 1566874800000,
                        'value': 59
                    }, {
                        'time': 1566878400000,
                        'value': 60
                    }, {
                        'time': 1566882000000,
                        'value': 64
                    }, {
                        'time': 1566885600000,
                        'value': 73
                    }, {
                        'time': 1566889200000,
                        'value': 90
                    }, {
                        'time': 1566892800000,
                        'value': 93
                    }, {
                        'time': 1566896400000,
                        'value': 108
                    }, {
                        'time': 1566900000000,
                        'value': 130
                    }, {
                        'time': 1566903600000,
                        'value': 196
                    }, {
                        'time': 1566907200000,
                        'value': 212
                    }, {
                        'time': 1566910800000,
                        'value': 201
                    }, {
                        'time': 1566914400000,
                        'value': 202
                    }, {
                        'time': 1566918000000,
                        'value': 215
                    }, {
                        'time': 1566921600000,
                        'value': 215
                    }, {
                        'time': 1566925200000,
                        'value': 195
                    }, {
                        'time': 1566928800000,
                        'value': 214
                    }, {
                        'time': 1566932400000,
                        'value': 227
                    }, {
                        'time': 1566936000000,
                        'value': 237
                    }, {
                        'time': 1566939600000,
                        'value': 211
                    }, {
                        'time': 1566943200000,
                        'value': 141
                    }, {
                        'time': 1566946800000,
                        'value': 147
                    }, {
                        'time': 1566950400000,
                        'value': 158
                    }
                ]
            },
            'WindSpeedMS': {
                'property': {
                    'label': 'Wind speed',
                    'unit': 'm/s',
                    'phenomenon': 'Wind',
                    'statisticalFunction': 'avg',
                    'statisticalPeriod': 'PT1H'
                },
                'timeValuePairs': [
                    {
                        'time': 1566712800000,
                        'value': 1.9
                    }, {
                        'time': 1566716400000,
                        'value': 2.3
                    }, {
                        'time': 1566720000000,
                        'value': 2
                    }, {
                        'time': 1566723600000,
                        'value': 2.7
                    }, {
                        'time': 1566727200000,
                        'value': 3.3
                    }, {
                        'time': 1566730800000,
                        'value': 5.6
                    }, {
                        'time': 1566734400000,
                        'value': 6.7
                    }, {
                        'time': 1566738000000,
                        'value': 6
                    }, {
                        'time': 1566741600000,
                        'value': 6
                    }, {
                        'time': 1566745200000,
                        'value': 6.9
                    }, {
                        'time': 1566748800000,
                        'value': 7.1
                    }, {
                        'time': 1566752400000,
                        'value': 7.1
                    }, {
                        'time': 1566756000000,
                        'value': 7.2
                    }, {
                        'time': 1566759600000,
                        'value': 7.8
                    }, {
                        'time': 1566763200000,
                        'value': 7.3
                    }, {
                        'time': 1566766800000,
                        'value': 7.2
                    }, {
                        'time': 1566770400000,
                        'value': 8.6
                    }, {
                        'time': 1566774000000,
                        'value': 8.3
                    }, {
                        'time': 1566777600000,
                        'value': 8.9
                    }, {
                        'time': 1566781200000,
                        'value': 9.1
                    }, {
                        'time': 1566784800000,
                        'value': 8.5
                    }, {
                        'time': 1566788400000,
                        'value': 7.3
                    }, {
                        'time': 1566792000000,
                        'value': 6.6
                    }, {
                        'time': 1566795600000,
                        'value': 6.1
                    }, {
                        'time': 1566799200000,
                        'value': 5.7
                    }, {
                        'time': 1566802800000,
                        'value': 4.8
                    }, {
                        'time': 1566806400000,
                        'value': 4.7
                    }, {
                        'time': 1566810000000,
                        'value': 5.3
                    }, {
                        'time': 1566813600000,
                        'value': 6.9
                    }, {
                        'time': 1566817200000,
                        'value': 7.9
                    }, {
                        'time': 1566820800000,
                        'value': 8.2
                    }, {
                        'time': 1566824400000,
                        'value': 7.6
                    }, {
                        'time': 1566828000000,
                        'value': 6.5
                    }, {
                        'time': 1566831600000,
                        'value': 4.7
                    }, {
                        'time': 1566835200000,
                        'value': 3.8
                    }, {
                        'time': 1566838800000,
                        'value': 4.7
                    }, {
                        'time': 1566842400000,
                        'value': 5.8
                    }, {
                        'time': 1566846000000,
                        'value': 7.3
                    }, {
                        'time': 1566849600000,
                        'value': 7.2
                    }, {
                        'time': 1566853200000,
                        'value': 6.6
                    }, {
                        'time': 1566856800000,
                        'value': 5.9
                    }, {
                        'time': 1566860400000,
                        'value': 5.2
                    }, {
                        'time': 1566864000000,
                        'value': 4
                    }, {
                        'time': 1566867600000,
                        'value': 5.6
                    }, {
                        'time': 1566871200000,
                        'value': 5.5
                    }, {
                        'time': 1566874800000,
                        'value': 5.7
                    }, {
                        'time': 1566878400000,
                        'value': 5.4
                    }, {
                        'time': 1566882000000,
                        'value': 4.5
                    }, {
                        'time': 1566885600000,
                        'value': 2.6
                    }, {
                        'time': 1566889200000,
                        'value': 2.3
                    }, {
                        'time': 1566892800000,
                        'value': 2.9
                    }, {
                        'time': 1566896400000,
                        'value': 2.5
                    }, {
                        'time': 1566900000000,
                        'value': 2
                    }, {
                        'time': 1566903600000,
                        'value': 2.2
                    }, {
                        'time': 1566907200000,
                        'value': 2.9
                    }, {
                        'time': 1566910800000,
                        'value': 3.2
                    }, {
                        'time': 1566914400000,
                        'value': 3.3
                    }, {
                        'time': 1566918000000,
                        'value': 3.4
                    }, {
                        'time': 1566921600000,
                        'value': 3.4
                    }, {
                        'time': 1566925200000,
                        'value': 3.3
                    }, {
                        'time': 1566928800000,
                        'value': 3.2
                    }, {
                        'time': 1566932400000,
                        'value': 3
                    }, {
                        'time': 1566936000000,
                        'value': 1.8
                    }, {
                        'time': 1566939600000,
                        'value': 1.3
                    }, {
                        'time': 1566943200000,
                        'value': 2.6
                    }, {
                        'time': 1566946800000,
                        'value': 4
                    }, {
                        'time': 1566950400000,
                        'value': 5.4
                    }
                ]
            }
        }
    }
    modifyAllValuePairs(location)
    return forecast
}

module.exports = timeCorrectedPairs
