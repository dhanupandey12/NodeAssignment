# NodeAssignment


# RESTful API using Node.js, Express, and Mongoose

This is a basic RESTful API built using Node.js, Express, and Mongoose. The API provides endpoints to perform CRUD operations on users and implements authentication and authorization using JWT tokens.

## Features

- Retrieve all users
- Retrieve a single user by ID
- Create a new user
- Update an existing user by ID
- Delete a user by ID
- User authentication using JWT tokens

## Prerequisites

- Node.js (version 14)
- MongoDB (version 6.0)

## Getting Started

cd your-project
npm install
npm start


The server will start running at http://localhost:3000.

**API Endpoints**
GET /api/users: Retrieve all users
GET /api/user/:id: Retrieve a single user by ID
POST /api/user: Create a new user
PUT /api/users=:id: Update an existing user by ID
DELETE /api/user/:id: Delete a user by ID

**Authentication**
To access the protected endpoints, you need to include a valid JWT token in the Authorization header of your requests. 
The token should be prefixed with the word "Bearer".

**Example**
Authorization: Bearer your-jwt-token





