
### **Role-Based Access Control (RBAC) System**  

This project is a robust implementation of Authentication, Authorization, and Role-Based Access Control (RBAC). It ensures secure user management, role assignment, and access control tailored to each role.  

---

## **Features**  
- **User Authentication**: Register, log in, and log out securely.  
- **Role-Based Authorization**: Grant and restrict access to resources based on user roles.  
- **Secure Password Management**: Hashing and salting using `bcrypt`.  
- **Dynamic Role and Permission Management**: Easily scalable for additional roles and permissions.  
- **Email Verification**: Secure email OTP verification for account activation.  
- **Forgot/Reset Password**: Password recovery with token-based reset.  
- **Scalable Architecture**: Modular code structure for future enhancements.  
- **Error Handling**: Clear and descriptive error messages for invalid actions.  

---

## **Technologies Used**  

### **Backend**:  
- **Node.js** and **Express.js** for API creation and request handling.  
- **MongoDB** for database storage and data management using **Mongoose**.  
- **JWT (JSON Web Tokens)** for secure authentication and session management.  
- **bcryptjs** for password hashing and comparison.  
- **Mailtrap** for email testing (e.g., OTP and password reset).  
- **dotenv** for environment configuration.  

### **Middleware and Utilities**:  
- **cookie-parser** for handling cookies in client-server interactions.  
- **crypto** for generating secure tokens.  

---

## **Setup and Execution**  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/madhubalan17js/vrv-assginment.git  
   cd vrv-assignment  
   ```  

2. **Install Dependencies**  
   ```bash  
   npm install  
   ```  

3. **Environment Configuration**  
   - Create a `.env` file in the project root.  
   - Add the following variables:  
     ```env  
   MONGO_URI="mongodb://127.0.0.1:27017/Adv-auth"
   PORT="7000"
   JWT_SECRET="mysecretkey"
   NODE_ENV="production"
   MAILTRAP_TOKEN="cd055cac9b3a6769154b9a2eb6ce561e"
   MAILTRAP_ENDPOINT="send.api.mailtrap.io" 
     ```  

4. **Run the Server**  
   ```bash  
   npm run dev  
   ```  
   The server runs on `http://localhost:7000`.  

5. **Connect to MongoDB**  
   - Use MongoDB Compass or a similar tool to connect to the local database.  

---

## **API Workflow**  

### **1. User Registration**  
- **Endpoint**: `POST /api/auth/signup`  
- **Body**:  
  ```json  
  {  
    "email": "ktmbalan17@gmail.com",  
    "name": "Madhu",  
    "password": "123456",  
    "role": "user"  
  }  
  ```  
- **Response**:  
  - On success, a verification token is generated and sent to the user's email.  

---

### **2. Email Verification**  
- **Endpoint**: `POST /api/auth/verify-email`  
- **Body**:  
  ```json  
  {  
    "code": "872257"  
  }  
  ```  
- **Response**:  
  - Confirms email verification and updates user status.  

---

### **3. Login**  
- **Endpoint**: `POST /api/auth/login`  
- **Body**:  
  ```json  
  {  
    "email": "ktmbalan17@gmail.com",  
    "password": "123456"  
  }  
  ```  
- **Response**:  
  - Returns a token to access protected routes.  

---

### **4. Check Authentication**  
- **Endpoint**: `GET /api/auth/check-auth`  
- **Response**:  
  - Confirms if the user is authenticated or returns an "Unauthorized" error.  

---

### **5. Logout**  
- **Endpoint**: `POST /api/auth/logout`  
- **Response**:  
  - Clears user session and logs out successfully.  

---

### **6. Forgot Password**  
- **Endpoint**: `POST /api/auth/forgot-password`  
- **Body**:  
  ```json  
  {  
    "email": "ktmbalan17@gmail.com"  
  }  
  ```  
- **Response**:  
  - Sends a password reset token to the email.  

---

### **7. Reset Password**  
- **Endpoint**: `POST /api/auth/reset-password/:resetToken`  
- **Body**:  
  ```json  
  {  
    "password": "654321"  
  }  
  ```  
- **Response**:  
  - Updates the password securely.  

---

## **Code Highlights**  

### **bcryptjs**  
- **Purpose**: Secure password hashing and comparison.  

### **crypto**  
- **Purpose**: Generates unique, secure tokens (e.g., for password resets).  

### **jsonwebtoken**  
- **Purpose**: Token-based authentication and session management.  

### **dotenv**  
- **Purpose**: Environment variable management for sensitive information.  

### **mongoose**  
- **Purpose**: Seamless MongoDB interaction using schemas and models.  

---

## **Error Handling**  
- Descriptive HTTP responses for each action.  
- Comprehensive status codes for debugging and transparency.  

---

## **Future Scope**  
- Add multi-factor authentication (MFA).  
- Extend to include advanced audit logs for user activity.  
- Implement a front-end for user interaction.  

---

## **Contact**  
For queries or suggestions:  
- **Name**: Madhu Balan  
- **Email**: madhubalan1247@gmail.com  
- **Mobile**: +91-9025447636  
- **LinkedIn**: [Madhu Balan](https://www.linkedin.com/in/madhu-balan-js)  

### Below this is my checking results of this Project Testing results

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


### Contact
For any queries or suggestions, please contact:
Name: Madhu Balan
Email: madhubalan1247@gmail.com
Mobile No: 9025447636
LinkedIn:https://www.linkedin.com/in/madhu-balan-js

        
