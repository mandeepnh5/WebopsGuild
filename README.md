# Role-Based Auth Website with WebSockets

## Project Overview
This project is a simple website that demonstrates role-based authentication along with WebSocket integration. The goal is to provide role-specific access control, where admins would ideally have the ability to change permissions (though this feature hasn't been implemented). The site also includes WebSocket functionality for real-time communication. 

## Features
- **WebSocket Integration**: Real-time communication features enabled by WebSockets.
- **External APIs**: Integrated for fetching dynamic data or providing additional functionality.

## Tech Stack
- **Frontend**: React.js – used for building a dynamic and responsive user interface.
- **Backend**: Node.js, Express.js – for server-side logic and handling requests.
- **Database**: MongoDB – a NoSQL database used for storing user data and roles.
- **WebSocket**: Socket.IO – implemented for real-time communication between the server and clients.

### Installation

1. Clone the repository:
   
   git clone https://github.com/mandeepnh5/WebopsGuild1.git

2. Install backend dependencies:
   
   cd backend
   npm install
   

3. Install frontend dependencies:
   
   cd ../frontend
   npm install
   

4. Create a .env file in the backend directory and add your MongoDB connection string:
   
   PORT=5000
   MONGO_DB_URI=mongodb+srv://mandeepnh5:mandeepnh5@cluster0.qndzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=dfsdkjbfsdbfjdsbgdsg
   NODE_ENV=development

### Running the Application

1. Start the backend server:
   
   cd backend
   npm run start
   

2. In a new terminal, start the frontend development server:
   
   cd frontend
   npm start
   

3. Open your browser and navigate to http://localhost:3000 to use the application and 5000 for backend

   
## Team Contribution
1. **Mandeep (ED23B053)**:  
   - Implemented the backend using Node.js and Express.
   - Integrated MongoDB for user authentication and role management.
   - Developed the WebSocket functionality using Socket.IO.
   - Did in some frontend development, particularly API integration and user interface improvements.

2. **GuruKiran (ED23B023)**:  
   - Designed and implemented the full frontend using React.js.
   - Built the user interface for authentication, user dashboard, and role-specific access.
   - Handled API integration and client-side logic to ensure smooth user experience.



