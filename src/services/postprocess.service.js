const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3')
const { createBatch } = require('../models/user.model')

async function processJsonOnBucketToDynamo (bucket, fileName) {
  try {
    const client = new S3Client({
      forcePathStyle: true,
      credentials: {
        accessKeyId: 'S3RVER',
        secretAccessKey: 'S3RVER'
      },
      endpoint: 'http://localhost:8002'
    })

    const res = await client.send(new GetObjectCommand({
      Bucket: bucket,
      Key: fileName
    }
    ))
    const users = await res.Body.transformToString()
    await createBatch(JSON.parse(users))

    return users
  } catch (err) {
    console.log(err)
    const message = `Error getting object ${fileName} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`
    throw new Error(message)
  }
}

module.exports = {
  processJsonOnBucketToDynamo
}
