import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.APP_PASSWORD,
  },
});

// Function to send an email
const sendEmail = async (subject, recipientEmail, message) => {
  console.log(recipientEmail)
  try {
    const mailOptions = {
      from: recipientEmail, 
      to: process.env.EMAIL_ADDRESS2, 
      subject,
      text: message, 
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return { success: true, info };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};

export default sendEmail;
