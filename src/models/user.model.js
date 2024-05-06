const {
  GetCommand,
  PutCommand,
  ScanCommand,
  BatchWriteCommand
} = require('@aws-sdk/lib-dynamodb')
const uuid = require('../config/adapters/uuid.adapter')
const { dynamoClient } = require('../config/adapters/dynamo.adapter')
const { chunkArray } = require('../utils/helper.util')

const USERS_TABLE = process.env.USERS_TABLE

async function get (id) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: id
    }
  }

  const { Item } = await dynamoClient.send(new GetCommand(params))
  return Item
}

async function scan () {
  const params = {
    TableName: USERS_TABLE
  }
  const { Items } = await dynamoClient.send(new ScanCommand(params))
  return Items
}

async function put (name, email) {
  const userId = uuid.generate()
  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId,
      name,
      email
    }
  }
  await dynamoClient.send(new PutCommand(params))
  return {
    userId,
    name,
    email
  }
}

async function createBatch (users) {
  const usersChunsk = chunkArray(users, 25)
  const promisesUsers = usersChunsk.map(
    user => {
      const putRequests = user.map((newUser) => ({
        PutRequest: {
          Item: newUser
        }
      }))

      const command = new BatchWriteCommand({
        RequestItems: {
          [USERS_TABLE]: putRequests
        }
      })

      return dynamoClient.send(command)
    }
  )
  await Promise.all(promisesUsers)
}

module.exports = {
  get,
  scan,
  put,
  createBatch

}
