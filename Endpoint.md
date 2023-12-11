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
      "_id": "6573496fdc3e65e0bc9dbbdd",
      "username": "myAccount",
      "email": "myAccount@example.com",
      "accessToken": "your-accessToken-key",
      "refreshToken": "your-refreshToken-key"
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
    [
      {
        "_id": "657349xxxx",
        "username": "myAccount",
        "email": "myAccount@example.com",
        "password": "$2b$10$MPBwI7TbyqIdIXNolU0iDOkJxlDedN1zf0udgQqYWSHskr2MqtaCu",
        "__v": 0,
        "address": "Jl. Kebayoran Kemanggi No.2, Indonesia"
      },
      {
        ... Other users details
      }
    ]
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
    [
      "user": {
          "_id": "65734xxxxx",
          "username": "myAccount",
          "email": "myAccount@example.com",
          "__v": 0,
          "address": "Jl. Kebayoran Kemanggi No.2, Indonesia"
      },
      "message": "User details berhasil didapatkan"
    ]
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
    [
      {
        "user": {
        "_id": "6573496fdc3e65e0bc9dbbdd",
        "username": "NewUsernameExample",
        "email": "NewAccount@example.com",
        "address": "Jl. Soekarno Hatta no.2, Indonesia"
      },
      "message": "User details updated successfully!"
      }
    ]
    ```