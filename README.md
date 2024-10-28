# Simple Task Management App

A simple task management application built using the React and Express (Express, React), where users can add, view, complete, delete, and prioritize tasks. This app uses React for the frontend, an Express API backend with SQLite for data storage, and local storage for additional data persistence on the frontend.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Features

- Add, view, complete, and delete tasks.
- Set priority levels for tasks (High, Medium, Low).
- Sort tasks by priority.
- Persistent data storage using SQLite on the backend and `localStorage` on the frontend.
- Responsive design for better user experience on mobile and desktop devices.

## Project Structure

```
Simple-Task-Management-App/
├── backend/
│   ├── db/
│   │   └── database.sqlite           # SQLite database
│   ├── models/
│   │   └── taskModel.js              # Task model and database functions
│   ├── routes/
│   │   └── taskRoutes.js             # API routes for task management
│   ├── server.js                     # Express server setup
│   └── package.json                  # Backend dependencies
└── frontend/
    ├── src/
    │   ├── App.js                    # Main App component
    │   ├── components/
    │   │   ├── AddTask.js            # Component for adding tasks
    │   │   ├── TaskList.js           # Component for displaying tasks list
    │   │   └── TaskItem.js           # Component for individual task item
    │   ├── services/
    │   │   └── api.js                # API service for HTTP requests
    │   └── styles/
    │       └── App.css               # Application styles
    ├── package.json                  # Frontend dependencies
    └── public/
```

## Installation

**Clone the Repository**
   ```bash
   git clone "https://github.com/atulgupta05/Simple-Task-Management-App.git"
   cd Simple-Task-Management-App
   ```

### Prerequisites
- Node.js and npm installed on your machine.

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```

   The backend server should now be running on `http://localhost:4000`.

### Frontend Setup

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

   The frontend application should now be running on `http://localhost:3000`.

## Usage

1. Open the app in your browser at `http://localhost:3000`.
2. Use the input field to add tasks with a title and select a priority level (High, Medium, or Low).
3. View tasks in the list, marked by their priority.
4. Click the "Complete" button to mark tasks as completed or undo this action.
5. Delete tasks by clicking the "Delete" button.
6. Tasks are sorted by priority and will persist between sessions due to the SQLite backend.

## API Endpoints

The backend API has the following endpoints for managing tasks:

- `GET /tasks` - Retrieve a list of all tasks.
- `POST /tasks` - Create a new task. Requires a `title` and `priority` in the request body.
- `PUT /tasks/:id` - Update a task's completion status. Requires `completed` (0 or 1) in the request body.
- `DELETE /tasks/:id` - Delete a task by ID.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Express.js, SQLite3, CORS
- **Database**: SQLite for data storage, LocalStorage for frontend persistence
- **Styles**: Custom CSS for responsive design
