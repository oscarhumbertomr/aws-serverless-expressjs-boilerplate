const express = require('express')
const router = express.Router()

router.get('/', (_req, res) => res.json('example version 2'))

module.exports = router
