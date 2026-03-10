const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const blogRoutes = require("./routes/blogRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/auth", authRoutes);

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectToMongoDB();

app.use("/blogs", blogRoutes);
app.use("/services", serviceRoutes);

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);

    res.status(500).json({
      success: false,
      error: "Error sending email",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;