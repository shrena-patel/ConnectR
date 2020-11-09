const express = require('express')
const router = express.Router()

const db = require('../db/candidates')

router.get('/', (request, response) => {
    db.getCandidates()
    .then((candidates) => {
        const sanitised = candidates.map((candidate) => {
            return {
                candidateId: candidate.id,
                locationSeeking: candidate.location_seeking,
                currentRole: candidate.current_role,
                roleSeeking: candidate.role_seeking,
                workRights: candidate.work_rights,
                yearsExp: candidate.years_exp,
                location: candidate.location,
                qualifications: candidate.qualifications
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