import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;  // Read the Mailtrap API token from the .env file

// Check if the TOKEN is loaded properly
if (!TOKEN) {
  console.error("Mailtrap token is not defined in .env file.");  // Log an error if the token is not found
  process.exit(1);  // Exit the program if the token is missing
} else {
  console.log("Mailtrap token loaded successfully.");  // Corrected typo in the console log message
}

// Initialize the Mailtrap client with the API token
export const client = new MailtrapClient({
  token: TOKEN,  // Pass the loaded token to the client
});

// Define the sender information
export const sender = {
  email: "hello@demomailtrap.com",  // Sender email address
  name: "Mailtrap Test",  // Sender name
};
