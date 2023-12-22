# MIHU (May I Help U?)

Backend Content of MIHU APP for Bangkit Capstone Project

### Endpoint Documentation

**Base URL :**

> {}

_See Endpoint documentation here :_

> https://github.com/fadhilaf/mihu-be/blob/main/Endpoint.md

**GCP Infrastructure Design**

![image](https://github.com/MIHU-PROJECT/mihu-be/blob/main/CC-API/src/assets/MIHU_GCP_Architecture.png)

**Database Relational Design**

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

## Setting Up Environment File

before starting running the application, set env file based on your needs:

```bash
ACCESS_TOKEN_SECRET = YOUR_ACCESS_TOKEN_SECRET_KEY
REFRESH_TOKEN_SECRET = YOUR_REFRESH_TOKEN_SECRET_KEY

MONGODB_URL = YOUR_LOCAL_CONNECTION_STRING

MONGO_ATLAS_URL = YOUR_CLOUD_BASE_DATABASE_CONNECTION_STRING

PORT = LOCAL_PORT

PROJECT_ID = YOUR_GCP_PROJECT_ID
BUCKET_NAME = YOUR_BUCKET_NAME_GCS
```

You Must Create a Database First before going to next step.

## Running the Application

To start the Express.js server and run the database setup:

```bash
# Choose your command :
npm run start
npm run dev
```