## MIHU Endpoint Documentation

> API documentation for MIHU Dev Apps

## Authentication section [ Worker/Recruiter ]

> ### Worker

### Register

* URL
  * `/worker/register`

* Method
    * `POST`

* Request Body
    * `username` as `string` 
    * `email` as `string` must be unique.
    * `password` as `string`
    <br/>
    
    ```
    {
      "username": "worker",
      "password": "worker123",
      "email": "worker@example.com"
    }
    ```
* Response _(success)_
    
    ```
    {
      "error": false,
      "message": 'Register Successfull'
    }
    ```

* Response _(fail)_
    
    ```
    {
      "error": false,
      "message": 'Register failed'
    }
    ```

### Login

* URL
  * `/worker/login`

* Method
    * `POST`

* Request Body
    * `email` as `string` must be unique.
    * `password` as `string`
    <br/>
    
    ```
    {
      "email": "worker@example.com"
      "password": "worker123",
    }
    ```
    
* Response _(success)_
    
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

* Response _(fail)_
    
    ```
   {
      "error": true,
      "message": "Login failed"
   }
    ```

> ### Recruiter

### Register

* URL
  * `/recruiter/register`

* Method
    * `POST`

* Request Body
    * `username` as `string` 
    * `email` as `string` must be unique.
    * `password` as `string`
    <br/>
    
    ```
    {
      "username": "recruiter",
      "password": "recruiter123",
      "email": "recruiter@example.com"
    }
    ```
* Response _(success)_
    
    ```
    {
      "error": false,
      "message": 'Register Successfull'
    }
    ```

* Response _(fail)_
    
    ```
    {
      "error": false,
      "message": 'Register failed'
    }
    ```

### Login

* URL
  * `/recruiter/login`

* Method
    * `POST`

* Request Body
    * `email` as `string` must be unique.
    * `password` as `string`
    <br/>
    
    ```
    {
       "email": "recruiter@example.com",
       "password": "recruiter123"
    }
    ```
    
* Response _(success)_
    
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

* Response _(fail)_
    
    ```
   {
      "error": true,
      "message": "Login failed"
   }
    ```

## Category section

### Get All Category

* URL
  * `/categories`

* Method
    * `GET`

* Response
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
          },
          {
            "_id": "657077a14efa02ea2514ae33",
            "name": "Electrical Help",
            "__v": 0,
            "description": "Services related to electrical issues."
          },
          {
            "_id": "657077a14efa02ea2514ae35",
            "name": "Plumbing & Laundry",
            "__v": 0,
            "description": "Services related to plumbing and laundry tasks."
          },
          {
            "_id": "657077a14efa02ea2514ae37",
            "name": "Ironing",
            "__v": 0,
            "description": "Services related to ironing clothes."
          },
          {
            "_id": "657077a14efa02ea2514ae39",
            "name": "Help Moving",
            "__v": 0,
            "description": "Services related to moving assistance."
          },
          {
            "_id": "657b84c528aea17dab18284d",
            "name": "Plumbing",
            "__v": 0,
            "description": "Services related to plumbing tasks."
          },
          {
            "_id": "657b84c528aea17dab182851",
            "name": "Laundry and Ironing",
            "__v": 0,
            "description": "Services related to laundry and ironing clothes."
          }
       ]
    }
    ```

## Job section

> ### Recruiter

### Create Job by Recruiter

* URL
  * `/recruiter/job`

* Method
    * `POST`

* Headers
    * `Authorization` : `<accessToken>`

* Request Body
    * `name` as `string`
    * `description` as `string`
    * `price` as `Number`
    * `categoryId` as `ObjectId` of _Categories model_
    <br/>
    
    ```
    {
      "name": "Sample Job Name",
      "description": "Help Moving some stuff",
      "price": 65000,
      "categoryId": "657077a14efa02ea2514ae39"
    }
    ```

* Response _(success)_
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

* Response _(fail)_
    ```
    {
      "error": true,
      "message": 'Server error adding job',
    }
    ```

> ### Worker

### Get All Active Jobs for Worker

* URL
  * `/worker/job`

* Method
    * `GET`

* Headers
    * `Authorization` : `<accessToken>`

* Response _(success)_
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

* Response _(fail)_
    ```
    {
       "error": true,
       "message": "Error getting all active jobs"
    }
    ```