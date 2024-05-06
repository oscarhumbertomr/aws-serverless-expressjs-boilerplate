const { InternalError } = require('../errors')
const userService = require('../services/user.service')

async function getAll (_req, res, next) {
  try {
    res.json(await userService.getAll())
  } catch (err) {
    console.error(err)
    if (err instanceof InternalError) { res.status(err.code).json({ error: err.message }) } else { next(err) }
  }
}

async function get (req, res, next) {
  try {
    res.json(await userService.getUser(req.query.id))
  } catch (err) {
    console.error(err)
    if (err instanceof InternalError) { res.status(err.code).json({ error: err.message }) } else { next(err) }
  }
}

async function create (req, res, next) {
  try {
    res.json(await userService.create(req.body))
  } catch (err) {
    console.error(err)
    if (err instanceof InternalError) { res.status(err.code).json({ error: err.message }) } else { next(err) }
  }
}

async function update (req, res, next) {
  try {
    res.json(await userService.update(req.params.id, req.body))
  } catch (err) {
    console.error('Error while updating user', err.message)
    next(err)
  }
}

async function remove (req, res, next) {
  try {
    res.json(await userService.remove(req.params.id))
  } catch (err) {
    console.error('Error while deleting user', err.message)
    next(err)
  }
}

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
}
