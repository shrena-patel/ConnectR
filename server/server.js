const express = require('express')

const authRoutes = require('./routes/auth')
const candidateRoutes = require('./routes/candidates')
const employerRoutes = require('./routes/employers')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1', authRoutes)
server.use('/api/v1/candidates', candidateRoutes)
server.use('/api/v1/employers', employerRoutes)

module.exports = server
