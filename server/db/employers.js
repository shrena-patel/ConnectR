const connection = require('./connection')

function getEmployers (db = connection) {
    return db('employers').select()
}

module.exports = {
    getEmployers
}