## MIHU Endpoint Documentation

> API documentation for MIHU Dev Apps

## Authentication section [ Worker/Recruiter ]

> ### Worker

### Register

- URL

  - `/worker/register`

- Method

  - `POST`

- Request Body

  - `username` as `string`
  - `email` as `string` must be unique.
  - `password` as `string`

    <br/>

  ```
  {
    "username": "worker",
    "password": "worker123",
    "email": "worker@example.com"
  }
  ```

- Response _(success)_

  ```
  {
    "error": false,
    "message": 'Register Successfull'
  }
  ```

- Response _(fail)_
  ```
  {
    "error": false,
    "message": 'Register failed'
  }
  ```

### Login

- URL

  - `/worker/login`

- Method

  - `POST`

- Request Body

  - `email` as `string` must be unique.
  - `password` as `string`

    <br/>

  ```
  {
    "email": "worker@example.com"
    "password": "worker123",
  }
  ```

- Response _(success)_

  ```
  {
    "error": false,
    "message": "Success",
    "data": {
        "userId": "657c1b1643d1dbbd21e98da2",
        "username": "worker",
        "email": "worker@example.com",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTdjMWIxNjQzZDFkYmJkMjFlOThkYTIiLCJyb2xlIjoid29ya2VyIiwiaWF0IjoxNzAyNjM3ODIwLCJleHAiOjE3MzQxOTU0MjB9.XTgzBqF5KBY0noezyvAsugS1q1wjCj3EvWL5jilXLy4",
         "role": "worker"
      }
  }
  ```

- Response _(fail)_
  ```
  {
    "error": true,
    "message": "Login failed"
  }
  ```

> ### Recruiter

### Register

- URL

  - `/recruiter/register`

- Method

  - `POST`

- Request Body

  - `username` as `string`
  - `email` as `string` must be unique.
  - `password` as `string`

    <br/>

  ```
  {
    "username": "recruiter",
    "password": "recruiter123",
    "email": "recruiter@example.com"
  }
  ```

- Response _(success)_

  ```
  {
    "error": false,
    "message": 'Register Successfull'
  }
  ```

- Response _(fail)_
  ```
  {
    "error": false,
    "message": 'Register failed'
  }
  ```

### Login

- URL

  - `/recruiter/login`

- Method

  - `POST`

- Request Body

  - `email` as `string` must be unique.
  - `password` as `string`

    <br/>

  ```
  {
     "email": "recruiter@example.com",
     "password": "recruiter123"
  }
  ```

- Response _(success)_

  ```
  {
    "error": false,
    "message": "Success",
    "data": {
        "userId": "657c1983a2181dd705191ce0",
        "username": "recruiter",
        "email": "recruiter@example.com",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTdjMTk4M2EyMTgxZGQ3MDUxOTFjZTAiLCJyb2xlIjoicmVjcnVpdGVyIiwiaWF0IjoxNzAyNjQzMzQxLCJleHAiOjE3MzQyMDA5NDF9.jGFXTGyDWxzsBVVFFwenJ0MBNUZ4eu6z_DFFuBPMZDI",
        "role": "recruiter"
      }
  }
  ```

- Response _(fail)_
  ```
  {
    "error": true,
    "message": "Login failed"
  }
  ```

## User section

### Get User Data

- URL

  - `/check-auth`

- Method

  - `GET`

- Headers

  - `Authorization` : `<accessToken>`

- Response _(success)_
  ```
  {
    "error": false,
    "message": "Auth success",
    "data": {
        "userId": "657f13b6bc841030cf9be916",
        "username": "recruiterTest",
        "email": "recruiterTest@example.com",
        "role": "recruiter"
      }
  }
  ```

## Category section

### Get All Category

- URL

  - `/categories`

- Method

  - `GET`

- Response
  ```
  {
     "error": false,
     "message": "success getting all category",
     "categories": [
        {
          "_id": "657077a14efa02ea2514ae31",
          "name": "Cleaning",
          "__v": 0,
          "description": "Services related to cleaning tasks."
          "categoriesImage": "https://storage.googleapis.com/categories-image/images/Plumbing.jpg"
        },
        {
          "_id": "657077a14efa02ea2514ae33",
          "name": "Electrical Help",
          "__v": 0,
          "description": "Services related to electrical issues."
          "categoriesImage": "https://storage.googleapis.com/categories-image/images/Plumbing.jpg"
        },
        {
          "_id": "657077a14efa02ea2514ae35",
          "name": "Plumbing & Laundry",
          "__v": 0,
          "description": "Services related to plumbing and laundry tasks."
          "categoriesImage": "https://storage.googleapis.com/categories-image/images/Plumbing.jpg"
        },
        {
          "_id": "657077a14efa02ea2514ae37",
          "name": "Ironing",
          "__v": 0,
          "description": "Services related to ironing clothes."
          "categoriesImage": "https://storage.googleapis.com/categories-image/images/Plumbing.jpg"
        },
        {
          "_id": "657077a14efa02ea2514ae39",
          "name": "Help Moving",
          "__v": 0,
          "description": "Services related to moving assistance."
          "categoriesImage": "https://storage.googleapis.com/categories-image/images/Plumbing.jpg"
        },
        {
          "_id": "657b84c528aea17dab18284d",
          "name": "Plumbing",
          "__v": 0,
          "description": "Services related to plumbing tasks."
          "categoriesImage": "https://storage.googleapis.com/categories-image/images/Plumbing.jpg"
        },
        {
          "_id": "657b84c528aea17dab182851",
          "name": "Laundry and Ironing",
          "__v": 0,
          "description": "Services related to laundry and ironing clothes."
          "categoriesImage": "https://storage.googleapis.com/categories-image/images/Plumbing.jpg"
        }
     ]
  }
  ```

### Predict Category GET

- URL

  - `/predict?sentences={sentences}`

- Method

  - `GET`

- Headers
  None

- Request body
  None

- Response _(success)_
  for `/predict?sentences=Tolong%20pindahkan%20lemari%20yang%20berat`
  ```
  {
    "error": false,
    "message": "Success",
    "data": {
        "predictions": [
            {
                "_id": "6580830f7725ecb96a43dfbb",
                "name": "Help Moving",
                "__v": 0,
                "categoriesImage": "https://storage.googleapis.com/categories-image/images/Help%20Moving.png",
                "description": "Services related to moving assistance."
            },
            {
                "_id": "6580830f7725ecb96a43df13",
                "name": "Cleaning",
                "__v": 0,
                "categoriesImage": "https://storage.googleapis.com/categories-image/images/Cleaning.png",
                "description": "Services related to cleaning tasks."
            },
            { ... And the others Categories Predictions }
        ]
    }
  }
  ```

- Response _(fail)_
  ```
  {
    "error": true,
    "message": "Error invoking Cloud Function"
  }
  ```
  
### Predict Category POST

- URL

  - `/predict`

- Method

  - `POST`

- Headers

  - `Authorization` : `<accessToken>`

- Request body
  ```
  {
    "sentences": "Tolong bersihkan baju saya yang terkena bercak darah"
  }
  ```

- Response _(success)_
  ```
  {
    "error": false,
    "message": "Success",
    "data": {
        "predictions": [
            {
                "_id": "6580830f7725ecb96a43dfa0",
                "name": "Laundry and Ironing",
                "__v": 0,
                "categoriesImage": "https://storage.googleapis.com/categories-image/images/Laundry%20%26%20Ironing.png",
                "description": "Services related to laundry and ironing clothes."
            },
            {
                "_id": "6580830f7725ecb96a43dfbb",
                "name": "Help Moving",
                "__v": 0,
                "categoriesImage": "https://storage.googleapis.com/categories-image/images/Help%20Moving.png",
                "description": "Services related to moving assistance."
            },
            { ... And the others Categories Predictions }
        ]
    }
  }
  ```

- Response _(fail)_
  ```
  {
    "error": true,
    "message": "Error invoking Cloud Function"
  }
  ```

## Job section

> ### Recruiter

### Create Job by Recruiter

- URL

  - `/recruiter/job`

- Method

  - `POST`

- Headers

  - `Authorization` : `<accessToken>`

- Request Body

  - `name` as `string`
  - `description` as `string`
  - `price` as `Number`
  - `categoryId` as `ObjectId` of _Categories model_

    <br/>

  ```
  {
    "name": "Sample Job Name",
    "description": "Help Moving some stuff",
    "price": 65000,
    "categoryId": "657077a14efa02ea2514ae39"
  }
  ```

- Response _(success)_

  ```
  {
    "error": false,
    "message": "Job added successfully",
    "Jobs": {
         "name": "Sample Job Name",
         "description": "Help Moving some stuff",
         "categoryId": "657077a14efa02ea2514ae39",
         "price": 65000,
         "createdBy": "657c1983a2181dd705191ce2",
         "isActive": true,
         "_id": "657c52420e1fc61071a7bba2",
         "createdAt": "2023-12-15T13:18:58.574Z",
         "updatedAt": "2023-12-15T13:18:58.574Z",
         "__v": 0
       }
  }
  ```

- Response _(fail)_
  ```
  {
    "error": true,
    "message": 'Server error adding job',
  }
  ```

> ### Worker

### Get All Active Jobs for Worker

- URL

  - `/worker/job`

- Method

  - `GET`

- Headers

  - `Authorization` : `<accessToken>`

- Response _(success)_

  ```
  {
     "error": false,
     "message": "Success fetch all active jobs",
     "data": {
         "jobs": [
             {
                 "_id": "657c52420e1fc61071a7bba2",
                 "name": "Sample Job Name",
                 "description": "Help Moving some stuff",
                 "categoryId": "657077a14efa02ea2514ae39",
                 "price": 65000,
                 "createdBy": "657c1983a2181dd705191ce2",
                 "isActive": true,
                 "createdAt": "2023-12-15T13:18:58.574Z",
                 "updatedAt": "2023-12-15T13:18:58.574Z",
                 "__v": 0
               }
           ]
       }
  }
  ```

- Response _(fail)_
  ```
  {
     "error": true,
     "message": "Error getting all active jobs"
  }
  ```

### Take Job by Worker

- URL

  - `/worker/job/:_id`

- Method

  - `POST`

- Headers

  - `Authorization` : `<accessToken>`

- Response _(success)_

  ```
  {
    "error": false,
    "message": "Success taking job",
    "data": {
      "order": {
        "_id": "order_id",
        "jobId": "job_id",
        "workerId": "worker_id",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    }
  }
  ```

- Response _(fail)_

  ```
  {
    "error": true,
    "message": "Invalid job id"
  }
  ```

## Order Section

> ### Worker

### Get All My Worker Order History

- URL

  - `/worker/order`

- Method

  - `GET`

- Headers

  - `Authorization` : `<accessToken>`

- Response _(success)_

  ```
  {
    "error": false,
    "message": "Success getting order history",
    "data": {
      "orders": [
        {
          "name": "Job Name",
          "category": "Category Name",
          "description": "Job Description",
          "price": 100,
          "status": "completed",
          "recruiter": "Recruiter Username",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        },
        // ... (more order history items)
      ]
    }
  }
  ```

- Response _(fail)_

  ```
  {
    "error": true,
    "message": "Server error getting order history"
  }
  ```

> ### Recruiter

### Update Order to Completed

- URL

  - `/recruiter/order/:_id`

- Method

  - `PATCH`

- Headers

  - `Authorization` : `<accessToken>`

- Response _(success)_

  ```
  {
    "error": false,
    "message": "Success completing order",
    "data": {
        "order": {
            "_id": "order_id",
            "jobId": "example_job_ObjectId",
            "workerId": "example_worker_ObjectId",
            "isCompleted": true,
            "createdAt": "timestamp",
            "updatedAt": "timestamp",
            "__v": 0
        }
      }
  }
  ```

- Response _(fail)_

  ```
  {
    "error": true,
    "message": "Order already completed"
  }

  ```

  ```
  {
    "error": true,
    "message": "Server completing order"
  }
  ```

### Get All My Recruiter Order History

- URL

  - `/recruiter/order`

- Method

  - `GET`

- Headers

  - `Authorization` : `<accessToken>`

- Response _(success)_

  ```
  {
    "error": false,
    "message": "Success getting order history",
    "data": {
      "orders": [
        {
          "name": "Job Name",
          "category": "Job Category",
          "description": "Job Description",
          "price": 100000,
          "status": "completed",
          "orderId": "09283470928b",
          "worker": "Worker Username",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        },
        {
          "name": "Ongoing Job",
          "category": "Another Category",
          "description": "Another Description",
          "price": 150000,
          "status": "ongoing",
          "orderId": "09283470928b",
          "worker": "Another Worker",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        },
        {
          "name": "Pending Job",
          "category": "Pending Category",
          "description": "Pending Description",
          "price": 20000,
          "status": "waiting",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        },
        ...
      ]
    }
  }
  ```

- Response _(fail)_

  ```
  {
    "error": true,
    "message": "Internal Server Error",
    "data": { null }
  }
  ```
