# BlogPosts Application

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) using Vite as the React project bundler. It supports post management, user authentication, categories, and more.

## Features

* **Backend:**

  * Express.js server
  * MongoDB database
  * RESTful API endpoints
  * JWT authentication
  * Controllers, routes, middleware architecture
  * File uploads for images
  * Error handling middleware

* **Frontend:**

  * React.js (created using Vite)
  * State management for posts and categories
  * Forms with validation (for creating/editing posts)
  * Optimistic UI updates
  * Loading and error state handling

## Technologies Used

* MongoDB
* Express.js
* React.js (Vite)
* Node.js
* Axios for API requests
* Tailwind CSS for styling
* JWT for authentication

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
pnpm install
```

3. Configure environment variables in a `.env` file:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

4. Run the backend server:

```bash
pnpm run dev
```

### Frontend Setup (React with Vite)

1. Navigate to the frontend directory:

```bash
cd frontend/client
```

2. Install dependencies:

```bash
pnpm install
```

3. Install Tailwind CSS (if not installed):

```bash
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Run the frontend development server:

```bash
pnpm run dev
```

## Folder Structure

* **/backend**

  * `/routes` (API route definitions)
  * `/controllers` (business logic)
  * `/middleware` (auth, error handling, logger)
  * `/models` (Mongoose models)
  * `server.js` (main backend server file)

* **/frontend/client**

  * `/src/components` (UI components like Navbar, Footer, Layout)
  * `/src/api` (API service files using Axios)
  * `/src/pages` (React pages like Home, Create Post, Login)
  * `/src/App.jsx` (application entry point)

## API Endpoints Overview

* **Posts:**

  * `GET /api/posts`
  * `GET /api/posts/:id`
  * `POST /api/posts`
  * `PUT /api/posts/:id`
  * `DELETE /api/posts/:id`

* **Categories:**

  * `GET /api/categories`
  * `POST /api/categories`

* **Auth:**

  * `POST /api/auth/register`
  * `POST /api/auth/login`
  * `DELETE /api/auth/delete`

## Screenshots
(frontend\client\public\Screenshots)

## Credits

* Built using the [Vite](https://vitejs.dev/) React framework.
* UI powered by [Tailwind CSS](https://tailwindcss.com/) and [ShadCN UI](https://ui.shadcn.com/).

## License

This project is open source and available under the [MIT License](LICENSE).
