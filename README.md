
### Role-Based Access Control (RBAC) System - using Backend (Node and express + Mongodb)
 ## Overview
This project implements a secure Authentication, Authorization, and Role-Based Access Control (RBAC) system. It ensures that users are authenticated securely, assigned roles, and granted access to resources based on their roles.

### Features
User Registration, Login, and Logout functionality.
Role-based authorization for accessing specific endpoints or performing actions.
Secure authentication using JWT (JSON Web Tokens).
Password security with hashing and salting.
Modular and scalable architecture.
Error handling and descriptive responses for invalid actions.
Dynamic role and permission management.

### Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (or any other database you've used)
Authentication: JSON Web Tokens (JWT)
Authorization: Role-Based Access Control (RBAC)
Password Security: bcrypt

### Process to check

## 1) First connect your Local Database using Mongodb compass

## 2) I am Setup PORT always 7000 thousands

## 3) "npm install" on the file bath VRV-Assignment folder on.

ex:PS D:\VRV-Assignment> npm install

## 4) "npm run dev" to run the backend.

ex:PS D:\VRV-Assignment> npm run dev

## 5) I am using in this Project "import method Type"

Now i am going to give the Api to check the SignUp,verify Email OTP pin ,Login,Logout,Forgot password request,update password ,check auth(check on user login)

###### API to Check work Flow

## 1)POST METHOD -(SIGNUP) http://localhost:7000/api/auth/signup

     With in Postman (Body -->raw-->json ) given the data like below

    {
    "email":"ktmbalan17@gmail.com",
    "name":"Madhu",
    "password":"123456",
    "role":"user" //["user","moderator","admin"]
     }

    Example response:

    {
    "success": true,
    "message": "User Created successfully",
    "user": {
        "email": "ktmbalan17@gmail.com",
        "name": "Madhu",
        "role": "user",
        "isVerified": false,
        "verificationToken": "872257",
        "verificationTokenExpiresAt": "2024-11-30T14:23:48.882Z",
        "_id": "6749ce74192e8ea5551257cc",
        "lastLogin": "2024-11-29T14:23:48.887Z",
        "createdAt": "2024-11-29T14:23:48.888Z",
        "updatedAt": "2024-11-29T14:23:48.888Z",
        "__v": 0
    }

}

mail producer is only active the Email:ktmbalan17@gmail.com oly able to access that my second email id: if want access my mailid to verify mail response (contact me : 9025447636 ) or otherwise use my mail id for common.

### Save the verificationtoken in the response above and use it

## 2)POST METHOD -(VERIFY EMAIL) http://localhost:7000/api/auth/verify-email

With in Postman (Body -->raw-->json ) given the data like below

{
"code":"872257"

}

    Example response:

{
"success": true,
"message": "Email verified successfully",
"user": {
"\_id": "6749ce74192e8ea5551257cc",
"email": "ktmbalan17@gmail.com",
"name": "Madhu",
"role": "user",
"isVerified": true,
"lastLogin": "2024-11-29T14:23:48.887Z",
"createdAt": "2024-11-29T14:23:48.888Z",
"updatedAt": "2024-11-29T14:24:09.225Z",
"\_\_v": 0
}
}

## 3)POST METHOD -(LOGIN) http://localhost:7000/api/auth/auth/login

With in Postman (Body -->raw-->json ) given the data like below

{
"email":"ktmbalan17@gmail.com",
"password":"123456"
}

Example response:

{
"success": true,
"message": "Logged in User successfully",
"user": {
"\_id": "6749ce74192e8ea5551257cc",
"email": "ktmbalan17@gmail.com",
"name": "Madhu",
"role": "user", // //["user","moderator","admin"]
"isVerified": true,
"lastLogin": "2024-11-29T14:24:22.692Z",
"createdAt": "2024-11-29T14:23:48.888Z",
"updatedAt": "2024-11-29T14:24:22.694Z",
"\_\_v": 0
}
}

## 4)GET METHOD -(CHECK-AUTH) http://localhost:7000/api/auth/auth/check-auth

Example response: when user is in login check provide this auth.....

{
"success": true,
"message": "Authorized - token provided",
"user": {
"\_id": "6749ce74192e8ea5551257cc",
"email": "ktmbalan17@gmail.com",
"name": "Madhu",
"role": "user",
"isVerified": true,
"lastLogin": "2024-11-29T14:24:22.692Z",
"createdAt": "2024-11-29T14:23:48.888Z",
"updatedAt": "2024-11-29T14:24:22.694Z",
"\_\_v": 0
}
}

## 5)POST METHOD -(LOGOUT) http://localhost:7000/api/auth/auth/logout

    this Api clear all cookies and our activity to logout

Example response :

{
"success": true,
"message": "Logged out successfully"
}

## 6)GET METHOD -(CHECK-AUTH) http://localhost:7000/api/auth/auth/check-auth

Example response: when user is in Not login or LOGOUT ,your are Unauthorized person.....

{
"success": false,
"message": "Unauthorized - no token provided"
}

## 6)POST METHOD -(FORGOT PASSWORD REQUEST) http://localhost:7000/api/auth/auth/forgot-password

     With in Postman (Body -->raw-->json ) given the data like below

     {
    "email":"ktmbalan17@gmail.com"
    }

Example response :

{
"success": true,
"resetPasswordToken":"eaa0ce6f171472ccb1d079089200bd9e675a79ec"
"message": "Password reset-link sent to your email",

}

copy the resetPassworToken for next api call

## 6)POST METHOD -(UPDATE PASSWORD) http://localhost:7000/api/auth/auth/rest-password/eaa0ce6f171472ccb1d079089200bd9e675a79ec //(albove resetPasswordToken)

With in Postman (Body -->raw-->json ) given the data like below

{

    "password":"654321" //this your new password

}

Example response :

{
"success": true,
"message": "Password reset successful"
}

### Explaination of My code

## bcryptjs

       1) Purpose: This library is used for hashing passwords securely.
       2)Passwords should never be stored in plain text for security reasons.
       3)bcryptjs is a lightweight library for generating password hashes and comparing them during login processes

## cookie-parser

       1)Purpose: Middleware to parse cookies attached to client requests.
       2)To retrieve or manipulate cookies sent by the client.

## crypto

       1)Purpose: Provides cryptographic functionalit.
       2)To generate secure tokens, encrypt/decrypt data, or implement other cryptographic functions.

## dotenv

        1)Purpose: Loads environment variables from a .env file into process.env.
        2)Keeps sensitive data (e.g., API keys, database URIs) out of the source code and allows easy environment configuration.

## jsonwebtoken

        1)Purpose: A library for creating and verifying JSON Web Tokens (JWTs).
        2)JWTs are used for securely transmitting information, often for authentication or session handling.

## mailtrap

        1)Purpose: Used for email testing in development. It simulates email sending without actually delivering emails to real inboxes.
        2)Allows testing of email functionality (e.g., password resets) safely in a controlled environment.

## mongoose

        1)Purpose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## express

        1)Purpose: A web framework for Node.js used to build APIs and web servers.
        2)Simplifies HTTP request handling, routing, middleware, and more.
