// Importing necessary modules for the Express app
import express, { Application } from 'express';
import { environmentVariables } from './environment.cofig';  // Import environment variables
import cors from 'cors';  // Importing CORS for cross-origin requests
import { io } from './socket.config';  // Importing socket.io configuration

// Initialize Express app
export const app: Application = express();

// Middleware to parse incoming JSON requests with a limit of 10kb
app.use(express.json({ limit: '10kb' }));

// CORS middleware to handle cross-origin requests
// Set the allowed origin here
app.use(cors({
    origin: '',  // Define the allowed origin (can be set to a URL or an array of URLs)
}));

// Disable the 'x-powered-by' header for security reasons
app.disable('x-powered-by');

// Function to start the Express server
const startApp = () => {
    // Start the Express app and listen on the port from the environment variables
    app.listen(environmentVariables.port, () => {
        console.log(`Express server running on port ${environmentVariables.port} and in ${environmentVariables.environment} environment`);
    }),
    
    // Set up the WebSocket connection and handle events when a connection is made
    io.on('', (socket) => {
        console.log('WebSocket connection successful');
    });
};

// Export the startApp function as the default export for the app to be run
export default startApp;
