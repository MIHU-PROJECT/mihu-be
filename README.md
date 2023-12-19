# MIHU (May I Help U?)

Backend Content of MIHU APP for Bangkit Capstone Project

### Endpoint Documentation

**Base URL :**

> {}

_See Endpoint documentation here :_

> https://github.com/fadhilaf/mihu-be/blob/main/Endpoint.md

_GCP Backend Architecture_

> _On Progress_

_Database relational Design_

![image](https://github.com/MIHU-PROJECT/mihu-be/blob/main/CC-API/src/assets/MIHU_Schema_Design.svg)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/fadhilaf/mihu-be.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CC-API
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## SETTING UP .ENV File

before starting running the application, set env file based on your needs:

```bash
ACCESS_TOKEN_SECRET=a960fbacd5457ca62feacdbf2c79bc6d60a4c32b02fa84980e31c3d81be58ae85c5455769d5a9927d355c6484c7e4b709c585009efee57fa34a53d8763cfe06d
REFRESH_TOKEN_SECRET=1ace6e5e443df749d5411d8c102025f166d6ac3e98f9fd22eeb0ceea7dfbeb571c6223870ad04ca3bef8e8a53d9221e0868f0110555b30487148d6cf2285203d

MONGODB_URL = mongodb://127.0.0.1:27017/Mihu-DB

MONGO_ATLAS_URL = mongodb+srv://msidiqh991:hardiansyah991@mihu-try.smuoa3c.mongodb.net/MIHU-CloudDB

PORT = 3000

PROJECT_ID = solid-idiom-402715
BUCKET_NAME = categories-image/images
```

You Must Create a Database First before going to next step.

## Running the Application

To start the Express.js server and run the database setup:

```bash
# Choose your command :
npm run start
npm run dev
```
