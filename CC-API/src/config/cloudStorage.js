const { Storage } = require("@google-cloud/storage");
const dotenv = require('dotenv');

dotenv.config();

const storage = new Storage({
    keyFilename: './serviceAccountKey.json',
    projectId: process.env.PROJECT_ID
})

const bucketName = process.env.BUCKET_NAME

module.exports = { storage, bucketName }