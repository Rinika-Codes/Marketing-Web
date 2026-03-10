# Digital Marketing Company Website (MERN Stack)

## Overview

This is a dynamic full-stack website developed for a fictional digital marketing company. The project demonstrates the implementation of a **modern MERN stack application** using **MongoDB, Express.js, React.js, and Node.js**.

The platform provides a responsive marketing website where users can explore services, read blogs, learn about the company, and contact the team. The project also includes an **admin blog management system secured with authentication and authorization**.

---

# Objective

The goal of this project is to build a **modern, responsive, and dynamic website** for a digital marketing company using the **MERN stack**, while demonstrating full-stack development skills such as API creation, database integration, authentication, and responsive UI design.

---

# Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Bootstrap / CSS
* Responsive UI Design

### Backend

* Node.js
* Express.js
* REST API Architecture

### Database

* MongoDB (MongoDB Atlas)

### Authentication & Security

* JWT (JSON Web Token) Authentication
* Password Hashing using **bcrypt**
* Protected Routes
* Basic backend security practices

---

# Features

## Landing Page

* Engaging landing page with modern UI.
* Smooth transitions and animations.
* Highlights company services and values.
* Clear call-to-action sections.

---

## About Us Page

* Information about the **Digital marketing company**.
* Company mission, vision, and goals.
* Clean and minimal design for readability.

---

## Blog Page

* Displays multiple blog posts dynamically from MongoDB.
* Each blog contains:

  * Featured image
  * Title
  * Description
  * "Read More" link
* Clicking a blog opens a **detailed blog page**.

---

## Admin Blog Management

* Secure blog creation panel.
* Protected route for blog administration.
* Requires authentication via **JWT token**.

Admin can:

* Create blogs
* Manage blog content

---

## Services Page

* Displays various digital marketing services.
* Each service includes:

  * Title
  * Description
  * Detailed page
* Service information is dynamically fetched.

---

## Contact Form

Users can send inquiries through a contact form containing:

* Name
* Email
* Phone
* Message

Features:

* Client-side validation
* Server-side validation
* Email sending using **Nodemailer**

---

# Performance Optimization

* Optimized images and assets
* Efficient API usage
* Component-based architecture
* Lazy loading where applicable

---

# Responsive Design

The website is fully responsive and works smoothly across:

* Desktop
* Tablet
* Mobile devices

---

# Database Integration

MongoDB is used for storing and retrieving dynamic data.

Includes CRUD operations for:

* Blog posts
* Services
* Users (authentication)

---

# Security Features

The application implements several security measures:

* Password hashing using **bcrypt**
* **JWT-based authentication**
* Protected backend routes
* Environment variables for sensitive data
* Basic request validation

---

# Project Structure

```
Marketing_web
│
├── backend
│   ├── routes
│   ├── models
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── components
│   ├── api
│   ├── utils
│   └── App.js
│
└── README.md
```

---

# Installation

## 1. Clone the Repository

```
git clone https://github.com/yourusername/Marketing_web.git
```

```
cd Marketing_web
```

---

## 2. Install Backend Dependencies

```
cd backend
npm install
```

---

## 3. Install Frontend Dependencies

```
cd ../frontend
npm install
```

---

# Environment Variables

Create a `.env` file inside the backend folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

# Running the Application

Start the backend server:

```
cd backend
npm start
```

Start the frontend:

```
cd frontend
npm start
```

The application will run on:

```
Frontend: http://localhost:3000
Backend: http://localhost:8000
```

---

# Deployment

You can deploy the project using free hosting services such as:

Frontend:

* Netlify
* Vercel

Backend:

* Render
* Railway

Database:

* MongoDB Atlas

---

# Evaluation Criteria

The project demonstrates:

* **Technical Skills** – Effective MERN stack implementation.
* **UI/UX Design** – Clean, responsive interface.
* **Dynamic Features** – Blog system, services pages, API integration.
* **Security** – JWT authentication and hashed passwords.
* **Code Quality** – Structured, maintainable codebase.
* **Deployment** – Fully functional live application.

---

# License

This project is licensed under the **MIT License**.

---

