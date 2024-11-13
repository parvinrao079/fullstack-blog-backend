# Travel Blog Backend
This project is part of the Full Stack Web & App Bootcamp at WBS Coding School. The backend for the Travel Blog application serves as the server-side component of a blogging platform where users can create, read, update, and delete travel posts. This is an individual project focused on building a robust RESTful API.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Learning Outcomes](#learning-outcomes)
- [Useful Resources](#useful-resources)
- [Team Member](#team-member)

## Project Overview
The Travel Blog backend project is designed to handle requests for creating, reading, updating, and deleting travel posts. It includes basic API routes for managing blog entries, organized with Express and PostgreSQL. This project emphasizes server-side programming, database management, and API integration, offering a secure backend foundation for a travel blog platform.

## Features

Post Management: Allows users to add new travel posts, update existing posts, and delete posts.
Database Integration: Uses PostgreSQL as the database to store blog posts.
RESTful API: Provides a well-structured API for managing blog posts, enabling frontend interaction.

## API Endpoints

Post Routes

```
- GET /api/posts - Retrieves all posts.
- GET /api/posts/:id - Retrieves a specific post by ID.
- POST /api/posts - Creates a new post.
- PUT /api/posts/:id - Updates an existing post by ID.
- DELETE /api/posts/:id - Deletes a post by ID.
```

## Technologies Used
<p> <img alt="Node.js" src="https://img.shields.io/badge/-Node.js-43853D?style=flat-square&logo=node.js&logoColor=white" /> <img alt="Express.js" src="https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white" /> <img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white" /> <img alt="Neon" src="https://img.shields.io/badge/-Neon-008080?style=flat-square&logo=neon&logoColor=white" /> </p>

## Project Structure

```
backend/
├── controllers/
│   └── postsController.js       # Handles post CRUD operations
├── db/
│   └── db.js                    # Database connection setup with PostgreSQL
├── routes/
│   └── postsRoutes.js           # API routes for post management
├── node_modules/
├── .env                          # Environment variables (not included in the repo)
├── .gitignore                    # Files and directories to ignore in version control
├── index.js                      # Entry point of the application
├── package-lock.json
├── package.json
```

## Learning Outcomes

This project provided valuable experience in:

- Setting up and structuring a backend application using Node.js and Express.
- Implementing a PostgreSQL database and connecting it to a Node.js server.
- Writing RESTful APIs to manage data.
- Configuring environment variables for secure database connections.
- Handling asynchronous database operations with error handling.

## Useful Resources
- [Express.js Documentation](https://expressjs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Neon Documentation](https://neon.tech/docs/introduction)

## Team Member
- [Parvin Rao](https://github.com/parvinrao079)


