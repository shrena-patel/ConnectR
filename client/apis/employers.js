import request from 'superagent'

export function getAllEmployers () {
    return request
    .get('/api/v1/employers')
    .then(response => response.body)
    
}