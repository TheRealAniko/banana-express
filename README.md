# eCommerce API

This project is a Node.js Express API server database. We create an eCommerce API where we can list products, categories and create orders for users.

### Contributions

- [Aniko](https://github.com/TheRealAniko)
- [Spencer](https://github.com/notspencer)
- [Alexander](https://github.com/AlexandervonderBey)
- [Andrei](https://github.com/raizy21)

are maintainers for this repository.

## Prerequisites

Before running this server, ensure you have the following installed:

- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git@github.com:TheRealAniko/banana-express.git
   cd banana-express
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Environment-specific configurations are set in `.env` file. This file is not available.

Create a new `.env` file, you may add the following variable the `DATABASE_URL` and `PORT` values.

## Running the Server

To start the server, run the following command:

```bash
npm run dev
```

The server will start running at [http://localhost:5000](http://localhost:5000)

## API Documentation

The API endpoints are documented.Here’s how to access it:

## API Endpoints

The following endpoints are available:

### User

- **GET /users** Retrieve a list of users.
- **POST /users** Create a new user
- **GET /users/:id** Retrieve a specific user by ID
- **PUT /users/:id** Update a specific user by ID
- **DELETE /users/:id** Delete a specific user by ID

### Product

- **GET /products** Retrieve a list of products, optionally filtered by category ID
- **POST /products** Create a new product
- **GET /products/:id:** Retrieve a specific product by ID
- **PUT /products/:id** Update a specific product by ID
- **DELETE /products/:id** Delete a specific product by ID

### Category

- **GET /categories** Retrieve a list of categories
- **POST /categories** Create a new categories
- **GET /categories/:id:** Retrieve a specific categories by ID
- **PUT /categories/:id** Update a specific categories by ID
- **DELETE /categories/:id** Delete a specific categories by ID

### Order

- **GET /orders** Retrieve a list of orders
- **POST /orders** Create a new orders
- **GET /orders/:id:** Retrieve a specific orders by ID
- **PUT /orders/:id** Update a specific orders by ID
- **DELETE /orders/:id** Delete a specific orders by ID

## Backend

- Set up a Node.js server using the built-in http module in package.json.
  `"type": "module",`

- The pg package connect your PostgreSQL database.
  Variable db , create new instance Pool. Poll coming from pg.

  - connectDB test database connection on startup. Print `"database connected successfully."` if client is connected or `"database connection failed", err.message` if connection do not work.

## Database

We use [Neon](https://console.neon.tech/) with postgresql.

Set the following queries in [Neon](https://console.neon.tech/).

# Backend API

# User Endpoints

### GET /users

`// Response[{"id": 1,"name": "John Doe","email": "john@example.com"},{"id": 2,"name": "Jane Doe","email": "jane@example.com"}]`

### POST /users

`// Request{"name": "John Doe","email": "john@example.com","password": "securepassword"}// Response{"id": 1,"name": "John Doe","email": "john@example.com"}`

### GET /users/:id

`// Response{"id": 1,"name": "John Doe","email": "john@example.com"}`

### PUT /users/:id

`// Request{"name": "John Doe","email": "john.doe@example.com"}// Response{"id": 1,"name": "John Doe","email": "john.doe@example.com"}`

### DELETE /users/:id

`// Response{"message": "User deleted successfully"}`

# Product Endpoints

### GET /products

`// Response[{"id": 1,"name": "Product 1","description": "Description of product 1","price": 19.99,"categoryId": 1},{"id": 2,"name": "Product 2","description": "Description of product 2","price": 29.99,"categoryId": 2}]// Should also be possible send a request like GET /products?categoryId=1 to only get products of a given category`

### POST /products

`// Request{"name": "Product 1","description": "Description of product 1","price": 19.99,"categoryId": 1}// Response{"id": 1,"name": "Product 1","description": "Description of product 1","price": 19.99,"categoryId": 1}`

### GET /products/:id

`// Response{"id": 1,"name": "Product 1","description": "Description of product 1","price": 19.99,"categoryId": 1}`

### PUT /products/:id

`// Request{"name": "Updated Product 1","description": "Updated description of product 1","price": 21.99,"categoryId": 1}// Response{"id": 1,"name": "Updated Product 1","description": "Updated description of product 1","price": 21.99,"categoryId": 1}`

### DELETE /products/:id

`// Response{"message": "Product deleted successfully"}`

# Category Endpoints

### GET /categories

`// Response[{"id": 1,"name": "Category 1"},{"id": 2,"name": "Category 2"}]`

### POST /categories

`// Request{"name": "Category 1"}// Response{"id": 1,"name": "Category 1"}`

### GET /categories/:id

`// Response{"id": 1,"name": "Category 1"}`

### PUT /categories/:id

`// Request{"name": "Updated Category 1"}// Response{"id": 1,"name": "Updated Category 1"}`

### DELETE /categories/:id

`// Response{"message": "Category deleted successfully"}`

# Order Endpoints

### GET /orders

`// Response[{"id": 1,"userId": 1,"products": [{"productId": 1,"quantity": 2},{"productId": 2,     "quantity": 1}],"total": 69.97}]`

### POST /orders

`// Request{"userId": 1,"products": [{"productId": 1,"quantity": 2},{"productId": 2,"quantity": 1}]}`

`// Response{"id": 1,"userId": 1,"products": [{"productId": 1,"quantity": 2},{"productId": 2,"quantity": 1}],"total": 69.97}`

### GET /orders/:id

`	// Response{"id": 1,"userId": 1,"products": [{"productId": 1,"quantity": 2},{"productId": 2,"quantity": 1}],"total": 69.97}`

### PUT /orders/:id

`// Request {"userId": 1,"products": [{"productId": 1,"quantity": 3},`
`{"productId": 2,"quantity": 1}]}`
`// Response{"id": 1,"userId": 1,"products": [{"productId": 1,"quantity": 3},`
`{"productId": 2,"quantity": 1}],"total": 89.96}`

### DELETE /users/:id

`	// Response{"message": "Order deleted successfully"}`

## Dependencies

- [Express.js](https://expressjs.com/) is a fast, minimalist web framework for Node.js that simplifies building APIs and web applications.
- [Dotenv](https://www.npmjs.com/package/dotenv) is a Node.js package that loads environment variables from a .env file into process.env for secure configuration management.
- [pg](https://www.npmjs.com/package/pg) is a PostgreSQL client for Node.js that enables seamless interaction with PostgreSQL databases using JavaScript.
- [cors](https://www.npmjs.com/package/cors) (Cross-Origin Resource Sharing) is a middleware for Node.js that enables secure cross-origin requests in web applications.
- [sequelize](https://sequelize.org)Sequelize is a Node.js ORM for SQL databases like PostgreSQL, MySQL, and SQLite. It simplifies database interactions with models, relationships, and migrations while supporting raw queries.

## Dev Dependencies

- [nodemon](https://nodemon.io/) Nodemon is a tool for Node.js that automatically restarts the server when file changes are detected, improving development efficiency.

# Project Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Sequelize Documentation](https://sequelize.org/)
- [JOI Documentation](https://joi.dev/)
- [Postman Collections](https://learning.postman.com/docs/getting-started/first-steps/creating-the-first-collection/)
