import request from 'superagent'

export function getAllCandidates () {
    return request
    .get('/api/v1/candidates')
    .then(response => response.body)
    
    
}