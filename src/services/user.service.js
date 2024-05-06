const { NotFoundError, BadRequestError } = require('../errors')
const userModel = require('../models/user.model')

async function getUser (userId) {
  if (userId) {
    const res = await userModel.get(userId)
    if (res) {
      const { userId, name, email } = res
      return [{ userId, name, email }]
    } else {
      throw new NotFoundError('Could not find user with provided "userId"')
    }
  } else {
    const users = userModel.scan()
    return users
  }
}

async function create (userData) {
  const { name, email } = userData

  if (typeof email !== 'string') {
    throw new BadRequestError('"userId" must be a string')
  } else if (typeof name !== 'string') {
    throw new BadRequestError('"userId" must be a string')
  }

  const newUser = await userModel.put(name, email)
  return newUser
}

module.exports = {
  getUser,
  create
}
