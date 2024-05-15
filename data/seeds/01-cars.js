const cars = [
    {
        vin: '1FM5K7F87EGA80090',
        make: 'subaru',
        model: 'crosstrek',
        mileage: '50000',
        title: 'clean',
        transmission: 'auto'
    },
    {
        vin: '4S3BK6253S6387674',
        make: 'kia',
        model: 'sorento',
        mileage: '5000',
        transmission: 'manual'
    },
    {
        vin: 'JN8AE2KP6F9193548',
        make: 'honda',
        model: 'civic',
        mileage: '500000',
    },
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}