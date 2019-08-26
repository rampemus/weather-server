const acceptedCity = (location) => {
    const accepted = ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti', 'Kuopio', 'Pori', 'Kouvola', 'Joensuu', 'Lappeenranta', 'Vaasa', 'Hämeenlinna', 'Seinäjoki', 'Rovaniemi', 'Mikkeli', 'Kotka', 'Salo', 'Porvoo', 'Kokkola', 'Hyvinkää', 'Lohja', 'Järvenpää', 'Nurmijärvi', 'Rauma']

    for ( let i = 0; i < accepted.length; i++ ) {
        if ( location === accepted[i]) {
            return true
        }
    }

    return false
}

module.exports = acceptedCity
