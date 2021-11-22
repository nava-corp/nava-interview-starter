const express = require('express')
const router = express.Router()
const data = require('../../../data/companies.json')

router.get('/', (_req, res) => {
  res.json({
    message: 'API - Hi'
  })
})

router.get('/companies/:ein', (req, res) => {
  const ein = Number(req.params.ein)
  const company = data.find(c => c.ein === ein)
  res.json(company)
})

router.get('/companies', (_req, res) => {
  res.json({})
})

module.exports = router
