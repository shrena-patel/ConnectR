const express = require('express')
const router = express.Router()

const db = require('../db/employers')

router.get('/', (request, response) => {
    db.getEmployers()
    .then((employers) => {
        const sanitised = employers.map((employer) => {
            return {
                
                companyId: employer.id,
                companyName: employer.company_name,
                companySize: employer.company_size,
                companyExpertise: employer.company_expertise,
                companyLocation: employer.company_location,
                
            }
        })
        return response.json(sanitised)
    })
    .catch(err => {
        console.log(err)
        response.status(500)
        .json({message: 'Something went very wrong'})
    
    })
})

module.exports = router