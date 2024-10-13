import { MailtrapClient } from "mailtrap";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { client, sender } from "./mailtrap.config.js";  // Import client from mailtrap.config.js

// Function to send a verification email
export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]; // Declare recipient object with the email

    try {
        const response = await client.send({  // Use the Mailtrap client to send the email
            from: sender, // Email sender address
            to: recipient, // Recipient's email
            subject: "Verify your email", // Subject of the email
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken), // Use the verification token in the template
            category: "Email Verification" // Email category
        });
        console.log("Email sent successfully", response); // Corrected typo in the console log message
    } catch (error) {
        console.log("Error sending verification email:", error); // Log the error if email sending fails
        throw new Error(`Error sending verification email: ${error}`); // Throw an error
    }
};

// Function to send a welcome email after successful email verification
export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }]; // Declare recipient object

    try {
        const response = await client.send({
            from: sender, // Email sender address
            to: recipient, // Recipient's email
            template_uuid: "4b6d509f-ec13-4bb5-a5a6-c64773f636c9", // Use the Mailtrap template UUID for the welcome email
            template_variables: {
                "name": name // Inject the user's name into the template
            }
        });
        console.log("Welcome email sent successfully", response); // Corrected typo in the console log message
    } catch (error) {
        console.error(`Error sending welcome email`, error); // Log the error if email sending fails
        throw new Error(`Error sending welcome email: ${error}`); // Throw an error
    }
};

// Function to send a password reset email with a reset link
export const sendPassswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }]; // Declare recipient object
    try {
        await client.send({
            from: sender, // Email sender address
            to: recipient, // Recipient's email
            subject: "Reset your Password", // Subject of the email
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL), // Use the reset URL in the email template
            category: "Password Reset", // Email category
        });
    } catch (error) {
        console.error(`Error sending password reset email`, error); // Log the error if email sending fails
        throw new Error(`Error sending password reset email: ${error}`); // Throw an error
    }
};

// Function to send a success email after a password reset
export const sendResetSuccessfulEmail = async (email) => {
    const recipient = [{ email }]; // Declare recipient object
    try {
        const response = await client.send({
            from: sender, // Email sender address
            to: recipient, // Recipient's email
            subject: "Password reset successful", // Subject of the email
            html: PASSWORD_RESET_SUCCESS_TEMPLATE, // Use the password reset success email template
            category: "Password Reset", // Email category
        });
        console.log("Password reset email sent successfully", response); // Corrected typo in the console log message
    } catch (error) {
        console.error(`Error sending password reset success email`, error); // Log the error if email sending fails
        throw new Error(`Error sending password reset success email: ${error}`); // Throw an error
    }
};
