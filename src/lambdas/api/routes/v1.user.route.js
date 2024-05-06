const express = require('express')
const router = express.Router()
const userController = require('../../../controllers/user.controller')

/* GET user. */
router.get('/', userController.get)

/* POST user. */
router.post('/', userController.create)

/* PUT user. */
router.put('/:id', userController.update)

/* DELETE user. */
router.delete('/:id', userController.remove)

module.exports = router
