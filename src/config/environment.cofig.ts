// Importing dotenv to load environment variables from a .env file
import dotenv from 'dotenv';

// Calling dotenv.config() to load the variables from the .env file into process.env
dotenv.config();

// Exporting an object containing environment variables to be used in the application
export const environmentVariables = {
    // The PORT environment variable is used to define the port on which the server will run
    port: process.env.PORT,
    
    // The NODE_ENV environment variable indicates the current environment (e.g., development, production)
    environment: process.env.NODE_ENV,

    //jsonwebtoken secret that makes authentication more robust

    jwtSecret:process.env.JWT_SECRET
};
