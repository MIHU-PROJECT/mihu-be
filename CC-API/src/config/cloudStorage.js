const { Storage } = require("@google-cloud/storage");
const path = require('path')
const serviceKey = path.join(__dirname, './serviceAccountKey.json')

dotenv.config();

const storage = new Storage({
    keyFilename: serviceKey,
    projectId: process.env.PROJECT_ID
})

const bucketName = storage.bucket(process.env.BUCKET_NAME)

module.exports = { storage, bucketName }