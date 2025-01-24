# User Management API

API for managing users with authorization using JWT tokens.

## Requirements

- **Node.js** (>= 14.x)
- **NPM** (>= 6.x)
- `.env` file containing a JWT secret key and database configuration

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AgnieszkaKondek/UserManagementApi/tree/main/user-management-api
   cd user-management-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add `.env` file:**
   Create a `.env` file and include your environment variables:
   ```env
   JWT_SECRET=your_jwt_secret
   DB_HOST=localhost 
   DB_PORT=5432 
   DB_USER=your_database_user 
   DB_PASSWORD=your_database_password 
   DB_NAME=your_database_name
   ```

4. **Run the application:**
   ```bash
   npm start
   ```
   The app will run by default at [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

### Authentication
**GET** `/auth`  
Generates a JWT token.

---

### Create User
**POST** `/api/user`  
**Authorization:** Requires a JWT token in the header:  

---

### Update User
**PATCH** `/api/user/{id}`  
**Authorization:** Requires a JWT token in the header:  

---

### Delete User
**DELETE** `/api/user/{id}`  
**Authorization:** Requires a JWT token in the header:  

---

### Get All Users
**GET** `/api/users`  
**Authorization:** Requires a JWT token in the header:  

---

## Swagger Documentation

Swagger (OpenAPI) documentation is available at:  
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## Technologies

- **Node.js**
- **Express.js**
- **JWT** (jsonwebtoken)
- **Swagger/OpenAPI**