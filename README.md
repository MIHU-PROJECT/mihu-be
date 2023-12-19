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

## API Endpoint List

```bash
# User

[POST] http://localhost:3000/register #Register User
[POST] http://localhost:3000/login #Login User
[GET] http://localhost:3000/users/657938b3b0bb8da7221cb298 #Get User By Id
[PUT] http://localhost:3000/users/6573496fdc3e65e0bc9dbbdd #Update User By Id
[GET] http://localhost:3000/users #Find All User By Role

# Jobs

[POST] http://localhost:3000/recruiter/job #Create Job By Recruiter (Recruiter)
[GET] http://localhost:3000/worker/job #Get All Active Jobs For Worker (Worker)
[POST] http://localhost:3000/worker/job/657c1b1643d1dbbd21e98da2 #Take Job By Worker (Worker)
[GET] http://localhost:3000/jobs/65735452486820bac60b61ce #Get Job By Id (Worker)
[PUT] http://localhost:3000/jobs/65746c0e3b0746adeb45c9b2 #Update Job By Id (Worker)
[DELETE] http://localhost:3000/jobs/65749622a2d63fc0bd40fc7a #Delete Job By Id (Worker)
[GET] http://localhost:3000/jobs/search/category/Ironing #Search Job By Category (Worker)
[GET] http://localhost:3000/jobs/search/name/Help #Search Job By Name (Worker)

# Order

[PATCH] http://localhost:3000/recruiter/order/657c1983a2181dd705191ce0 #Update Order Completed by Recruiter (Recruiter)
[GET] http://localhost:3000/recruiter/order #Get All My Order History (Recruiter)
[GET] http://localhost:3000/worker/order #Get All My Orders History (Worker)

# Category

[GET] http://localhost:3000/categories #Get All Category
[POST] https://asia-southeast2-latihan-osama.cloudfunctions.net/mihu_inference #MIHU Model Inference
[POST] http://localhost:3000/predict #Predict category
```
