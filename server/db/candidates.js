const connection = require('./connection')

function getCandidates (db = connection) {
    return db('candidates').select()
}

module.exports = {
    getCandidates
}