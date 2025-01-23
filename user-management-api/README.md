# User Management API

API for user management, using authorization using JWT tokens.

## Requirements

- Node.js (>= 14.x)
- NPM (>= 6.x)
- `.env` file with a JWT secret key and database configuration

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/user/repo.git
   cd repo

Install dependencies => npm install
Create .env and add your environment variables:
# JWT Secret
JWT_SECRET=your_secret_key

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

2. Running the Application
npm start
The app will run by default at http://localhost:3000

3. API Endpoints

# Authentication -> GET /auth
Generates a JWT token.
# Create User -> POST /api/user
Authorization: Requires a JWT token in the header Authorization: Bearer <token>.
# Update User -> PATCH /api/user/{id}
Authorization: Requires a JWT toke
# Delete User -> DELETE /api/user/{id}
Authorization: Requires a JWT token.
# Get All Users -> GET /api/users
Authorization: Requires a JWT token.

4. Technologies

Node.js
Express.js
JWT (jsonwebtoken)
Swagger/OpenAPI

5. Swagger Documentation
Swagger (OpenAPI) documentation is available at: http://localhost:3000/api-docs

