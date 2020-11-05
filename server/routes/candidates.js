const express = require('express')
const router = express.Router()

const db = require('../db/candidates')

router.get('/', (request, response) => {
    db.getCandidates()
    .then(candidate => {
        response.json(candidate)
    })
    .catch(err => {
        console.log(err)
        response.status(500)
        .json({message: 'Something went very wrong'})
    
    })
})

module.exports = router