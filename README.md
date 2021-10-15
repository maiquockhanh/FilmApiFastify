# FilmApiFastify

This is movies system

**Description**

- fastify framework based backend api application
- mongodb database
- JWT Token for Authentication

#

**Install dependencies:**

- npm install

#

**Test application:**

- npm start

#

## Basic APIs:

**Get all films in system:**

- Method: GET

```
http://0.0.0.0:3000/film/all
```

#

**Log in**

- Method: POST

```
http://0.0.0.0:3000/signin
```

**Sample Body**

######

```
{
    "email": "mqk@gmail.com",
    "password": "12345678"
}
```

**Sample response when login successfully**

######

```
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTY4ZmVlODc3MGVlODM5OGNhNmUxODQiLCJpYXQiOjE2MzQyNzI2NTgsImV4cCI6MTYzNDM1OTA1OH0.IDOz5RbNI7TgcyHVnfStUOkOUMRFVm36ikpEUDMxb4k"
}
```

#

**Sign up**

- Method: POST

```
http://0.0.0.0:3000/user/create
```

**Sample Body**

######

```
{
    "email": "mqk@gmail.com",
    "password": "12345678",
    "firstName": "Mai",
    "middleName": "Quoc",
    "lastName": "Khanh"
}
```

#

**User views own profile**

- Method: POST

```
http://0.0.0.0:3000/user/info
```

**Sample Body**

######

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTY4ZmVlODc3MGVlODM5OGNhNmUxODQiLCJpYXQiOjE2MzQyNzI2NTgsImV4cCI6MTYzNDM1OTA1OH0.IDOz5RbNI7TgcyHVnfStUOkOUMRFVm36ikpEUDMxb4k"
}
```

#

**User follows a film**

- Method: POST

```
http://0.0.0.0:3000/user/film/add
```

**Sample Body**

######

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTY4ZmVlODc3MGVlODM5OGNhNmUxODQiLCJpYXQiOjE2MzQyNzI2NTgsImV4cCI6MTYzNDM1OTA1OH0.IDOz5RbNI7TgcyHVnfStUOkOUMRFVm36ikpEUDMxb4k",
    "filmId": "6168f239ff384a73f065ca37"
}
```

#

**User views own list of films**

- Method: POST

```
http://0.0.0.0:3000/user/film
```

**Sample Body**

######

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTY4ZmVlODc3MGVlODM5OGNhNmUxODQiLCJpYXQiOjE2MzQyNzI2NTgsImV4cCI6MTYzNDM1OTA1OH0.IDOz5RbNI7TgcyHVnfStUOkOUMRFVm36ikpEUDMxb4k"
}
```
