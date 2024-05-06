class InternalError extends Error {
  constructor (code, key, text) {
    super(text)
    this.key = key
    this.code = code
  }
}

class NotFoundError extends InternalError {
  constructor (errorMessage, key = 'not_found') {
    super(404, key, errorMessage)
  }
}
class BadRequestError extends InternalError {
  constructor (errorMessage, key = 'bad_request') {
    super(400, key, errorMessage)
  }
}

module.exports = {
  InternalError,
  NotFoundError,
  BadRequestError
}
