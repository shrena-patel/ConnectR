const express = require('express')
const router = express.Router()

const db = require('../db/employers')

router.get('/', (request, response) => {
    db.getEmployers()
    .then(employer => {
        response.json(employer)
    })
    .catch(err => {
        console.log(err)
        response.status(500)
        .json({message: 'Something went very wrong'})
    
    })
})

module.exports = router