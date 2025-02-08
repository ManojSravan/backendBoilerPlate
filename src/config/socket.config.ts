// Importing the necessary types from socket.io for socket connections
import { SocketId } from './../../node_modules/socket.io-adapter/dist/in-memory-adapter.d';  // Importing SocketId type (for type safety if needed)

// Importing the createServer function from Node.js's http module to create an HTTP server
import { createServer } from 'node:http';

// Importing the Server class from socket.io to set up the WebSocket server
import { Server } from 'socket.io';

// Importing the Express app configuration that we will use for the server
import { app } from './app.config';

// Creating an HTTP server by passing the Express app as the request listener
const server = createServer(app);

// Initializing a new Socket.IO server and passing the HTTP server to it
// This will enable WebSocket connections to the Express server
export const io = new Server(server);

