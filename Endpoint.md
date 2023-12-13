## MIHU Endpoint Documentation

> API documentation for MIHU Dev Apps

## Authentication section

### Register

* URL
  * `/register`

* Method
    * `POST`

* Request Body
    * `username` as `string` 
    * `email` as `string` must be unique.
    * `password` as `string`
    <br/>
    
    ```
    {
      "username": "ExampleAccount",
      "password": "Example12345",
      "email": "ExampleAccount@example.com"
    }
    ```
* Response
    
    ```
    {
      "error": false,
      "message": "Register berhasil"
    }
    ```

### Login

* URL
  * `/login`

* Method
    * `POST`

* Request Body
    * `email` as `string` must be unique.
    * `password` as `string`
    <br/>
    
    ```
    {
      "email": "ExampleAccount@example.com"
      "password": "Example12345",
    }
    ```
    
* Response
    
    ```
    {
      "error": false,
      "message": "success",
      "loginResult": {
          "_id": "6573496fdc3e65e0bc9dbbdd",
          "username": "myAccount",
          "email": "myAccount@example.com",
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTczNDk2ZmRjM2U2NWUwYmM5ZGJiZGQiLCJpYXQiOjE3MDI0NDMyODcsImV4cCI6MTcwMjUyOTY4N30.yt7hHdLthFGLKpzFHFRVbtVsVm8JXChIER-43f71OnM",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTczNDk2ZmRjM2U2NWUwYmM5ZGJiZGQiLCJpYXQiOjE3MDI0NDMyODcsImV4cCI6MTcwMjUyOTY4N30.xrYn-psuVmoyckMPsjIMGSkuCCEjVtMPSvpE9t3Z3Fg"
      }
    }
    ```

### Logout

* URL
  * `/logout`

* Method
    * `DELETE`

* Response
    ```
    {
       "message": "Logout berhasil"
    }
    ```
    
## User section

### Get All Users

* URL
  * `/users`

* Method
    * `GET`

* Headers
    * `Authorization` : `Bearer <accessToken>`

* Response
    ```
    {
      "error": false,
      "message": "Users fetched successfully",
      "users": [
          {
            "_id": "657349xxxx",
            "username": "myAccount",
            "email": "myAccount@example.com",
            "password": "$2b$10$Mm6yBvh/vCKgy82Xn...",
            "__v": 0,
            "address": "Jl. Kebayoran Kemanggi No.2, Indonesia",
            "refreshToken": "your-refreshToken-key"
          },
          {
            ... Other users details.
          }
      ]
    }
    ```

### Get User by Id (Detail User)

* URL
  * `/users/:_id`

* Method
    * `GET`
 
* Headers
    * `Authorization` : `Bearer <accessToken>`

* Response
    ```
    {
      "error": false,
      "message": "User details berhasil didapatkan",
      "user": {
          "_id": "65734xxxxx",
          "username": "myAccount",
          "email": "myAccount@example.com",
          "__v": 0,
          "address": "Jl. Kebayoran Kemanggi No.2, Indonesia"
      },
      "message": "User details berhasil didapatkan"
    }
    ```

### Update User by Id

* URL
  * `/users/:_id`

* Method
    * `PUT`
 
* Headers
    * `Authorization` : `Bearer <accessToken>`
 
* Request Body
    ```
    [
      {
        "username": "Your-new-username",
        "email": "newEmail@example.com",
        "password": "your-new-password",
        "address": "Set an new address"
      }
    ]
    ```

* Response
    ```
    {
      "error": false,
      "message": "User details updated successfully!",
      "user": {
          "_id": "6573496fdc3e65e0bc9dbbdd",
          "username": "myAccount",
          "email": "myAccount@example.com",
          "address": "Jl. Kebayoran No.2, Indonesia"
        }       
    }
    ```