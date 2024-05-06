const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const {
  DynamoDBDocumentClient
} = require('@aws-sdk/lib-dynamodb')
const dbConfig = require('../dynamo.config')

const client = new DynamoDBClient(dbConfig)
const dynamoClient = DynamoDBDocumentClient.from(client)

module.exports = {
  dynamoClient
}
