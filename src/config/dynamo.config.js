const env = process.env
let dbParameters = {}
if (process.env.IS_OFFLINE) {
  dbParameters = {
    region: 'localhost',
    endpoint: 'http://localhost:8001',
    accessKeyId: 'DEFAULT_ACCESS_KEY',
    secretAccessKey: 'DEFAULT_SECRET'
  }
} else {
  dbParameters = {
    region: env.REGION,
    accessKeyId: env.DYNAMO_ACCESS_KEY,
    secretAccessKey: env.DYNAMO_SECRET
  }
}

module.exports = dbParameters
