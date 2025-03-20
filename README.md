# Netflix Clone

## Overview

This project is a full-stack web application built using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. It provides users with a seamless experience to browse, search, and watch movies and TV shows. The app includes features such as user authentication, search history, and fetching data from external APIs.

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT

## Features

- User authentication (signup, login, logout)
- Responsive UI
- Fetch movies and TV shows from external APIs
- Search for actors, movies, and TV shows
- Watch trailers
- Fetch search history
- Get similar movies and TV shows
- Awesome landing page

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

- **React.js**: The frontend is built using React.js, a popular JavaScript library for building user interfaces.
- **Tailwind CSS**: Tailwind CSS is used for styling, providing a utility-first approach to quickly build custom designs.
- **Components**: The app is structured into reusable components for modularity and ease of maintenance.

### Backend

- **Node.js and Express.js**: The backend is built using Node.js and Express.js, a fast and minimalistic web framework for Node.js.
- **MongoDB**: MongoDB is used as the database to store user data and search history.
- **JWT Authentication**: JSON Web Tokens (JWT) are used for secure user authentication.

## Steps to Run the Project

### Prerequisites

- Node.js installed on your machine
- MongoDB installed or a MongoDB Atlas account
- An API key from a movie/TV show database (e.g., TMDB)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Anupam4058/Netflix-Clone
   cd Netflix-Clone/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   API_KEY=your_movie_api_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5000` to see the app in action.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


Thank you for using this project! If you have any questions or need further assistance, feel free to reach out.
