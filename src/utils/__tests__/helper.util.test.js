const { chunkArray } = require('../helper.util')
const userData = require('../../../test/mockData/s3/users.json')

test('chunkArray function', () => {
  const chunkUsers = chunkArray(userData, 2)
  expect(JSON.stringify(chunkUsers[0])).toBe(JSON.stringify([userData[0], userData[1]]))
})
