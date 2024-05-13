const cars = [
    {
        vin: '01234567891011123',
        make: 'subaru',
        model: 'crosstrek',
        mileage: '50000',
        title: 'clean',
        transmission: 'auto'
    },
    {
        vin: '01234567891055523',
        make: 'kia',
        model: 'sorento',
        mileage: '5000',
        transmission: 'manual'
    },
    {
        vin: '01234567891011444',
        make: 'honda',
        model: 'civic',
        mileage: '500000',
    },
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}