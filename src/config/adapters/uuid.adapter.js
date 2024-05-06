const { v4: uuidv4 } = require('uuid')

module.exports = class UuidAdapter {
  static generate () {
    return uuidv4()
  }
}
