const { processJsonOnBucketToDynamo } = require('../../services/postprocess.service')

module.exports.handler = async (event) => {
  const bucket = event.Records[0].s3.bucket.name
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '))

  await processJsonOnBucketToDynamo(bucket, key)
}
