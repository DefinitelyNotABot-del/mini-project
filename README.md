# 🎓 CSAI Department Management System

<div align="center">

![Project Banner](public/logo.jpg)

**A comprehensive web-based management system for the Computer Science & Artificial Intelligence Department**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)

**Completed Academic Project - 2024**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Modules](#-modules)
- [Screenshots](#-screenshots)
- [Team](#-team)
- [License](#-license)

---

## 🌟 Overview

The **CSAI Department Management System** is a full-stack web application designed to streamline various department operations including student management, complaint handling, voting systems, document verification using AI, and an intelligent chatbot assistant.

This system integrates multiple technologies to provide:
- **User Authentication & Authorization** - Secure login and registration
- **Complaint Management System** - Track and resolve student complaints
- **Electronic Voting Platform** - Conduct secure online elections
- **AI-Powered Document Verification** - Machine learning-based document authenticity checks
- **AI Assistant Chatbot** - Interactive student support system
- **Department Updates Hub** - Centralized information sharing

---

## ✨ Features

### 🔐 Authentication System
- User registration with email validation
- Secure login with session management
- Password reset functionality
- Profile management and updates

### 📢 Complaint Hub
- Submit complaints with subject and description
- Track complaint status
- Email-based complaint tracking
- Admin dashboard for complaint management

### 🗳️ Electifier (Voting System)
- Secure electronic voting platform
- Real-time vote counting
- Voter authentication
- Result visualization
- **Developed with PHP and MySQL backend**

### 📄 Dock-Check (Document Verification)
- AI/ML-based document authentication
- Image processing using OpenCV
- OCR text extraction with Tesseract
- SVM classifier for real/fake detection
- Feature extraction (text length, keypoints)

### 🤖 AI Assistant
- Interactive chatbot interface
- Student query resolution
- 24/7 availability
- Smart response system

### 📰 Updates Module
- Department announcements
- Important notices
- Event notifications
- Academic updates

---

## 🏗️ System Architecture

```
┌─────────────────┐
│   Frontend      │
│   (HTML/CSS/JS) │
└────────┬────────┘
         │
    ┌────▼─────┐
    │  Express │
    │  Server  │
    └────┬─────┘
         │
    ┌────▼─────────────────┐
    │                      │
┌───▼────┐          ┌──────▼──────┐
│MongoDB │          │Flask Server │
│Database│          │(AI/ML)      │
└────────┘          └─────────────┘
```

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Python/Flask** - ML service backend
- **PHP** - Voting system backend
- **MySQL** - Voting system database

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with custom animations
- **Vanilla JavaScript** - Client-side logic
- **Font Awesome** - Icons

### AI/ML Components
- **Python** - Programming language
- **Flask** - Micro web framework
- **OpenCV** - Computer vision
- **Tesseract OCR** - Text extraction
- **scikit-learn** - Machine learning (SVM)
- **NumPy** - Numerical computing

### Additional Tools
- **bcryptjs** - Password hashing
- **JWT** - Token-based authentication
- **body-parser** - Request body parsing
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development auto-reload

---

## 📁 Project Structure

```
mini-project/
│
├── public/                      # Frontend files
│   ├── css/                    # Stylesheets
│   ├── js/                     # Client-side scripts
│   ├── index.html              # Landing page
│   ├── home.html               # Main dashboard
│   ├── signin.html             # Login page
│   ├── register.html           # Registration page
│   ├── complain.html           # Complaint form
│   ├── electifier.html         # Voting interface
│   ├── aibot.html              # AI chatbot
│   ├── i.html                  # Document verification
│   ├── update.html             # Updates page
│   ├── profile.html            # User profile
│   └── about.html              # About page
│
├── voting system001/           # Voting module (PHP)
│   ├── api/                    # PHP API endpoints
│   │   ├── login.php
│   │   ├── register.php
│   │   ├── vote.php
│   │   ├── complaint.php
│   │   └── connect.php
│   ├── routes/                 # Voting routes
│   │   ├── dashboard.php
│   │   └── logout.php
│   └── css/                    # Voting styles
│
├── server.js                   # Main Express server
├── doc.py                      # ML model training
├── ss.py                       # Flask ML API server
├── document_verification_model.pkl  # Trained ML model
├── package.json                # Node dependencies
├── requirements.txt            # Python dependencies
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/downloads/)
- **Tesseract OCR** - [Installation Guide](https://github.com/tesseract-ocr/tesseract)
- **PHP** (v7.4 or higher) - For voting system
- **MySQL** - For voting system database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DefinitelyNotABot-del/mini-project.git
   cd mini-project
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start MongoDB**
   ```bash
   # Windows (if installed as service)
   net start MongoDB
   
   # Linux/Mac
   sudo systemctl start mongod
   ```

5. **Configure Tesseract Path** (if needed)
   
   Edit `ss.py` to set your Tesseract path:
   ```python
   pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
   ```

6. **Configure Database**
   
   The default MongoDB connection is set to:
   ```javascript
   mongodb://localhost:27017/student
   ```
   
   Update in `server.js` if your MongoDB runs on a different host/port.

---

## 💻 Usage

### Running the Application

1. **Start the Express Server**
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```
   
   The server will start at `http://localhost:3019`

2. **Start the Flask ML Server** (for document verification)
   ```bash
   python ss.py
   ```
   
   The Flask server will start at `http://localhost:5000`

3. **Access the Application**
   
   Open your browser and navigate to:
   ```
   http://localhost:3019
   ```

### First Time Setup

1. **Register a new account** on the registration page
2. **Login** with your credentials
3. **Explore** the various modules from the home dashboard

---

## 🔌 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/register` | Register new user | `{ username, password, email }` |
| POST | `/signin` | User login | `{ username, password }` |
| POST | `/reset-password` | Reset password | `{ email, password }` |
| POST | `/update-profile` | Update user profile | `{ email, username, password }` |

### Complaint Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/complain` | Submit complaint | `{ email, subject, issue }` |

### Response Format

**Success Response:**
```json
{
  "message": "Operation successful"
}
```

**Error Response:**
```json
{
  "message": "Error description"
}
```

---

## 📦 Modules

### 1. **Home Dashboard**
Central hub providing access to all system modules with an intuitive card-based interface.

### 2. **Updates Module**
Displays department announcements, academic notices, and event information.

### 3. **Electifier (Voting System)**
- Secure voter authentication
- Real-time vote submission
- Result calculation and display
- Admin dashboard for election management
- **Built with PHP and MySQL for robust performance**

### 4. **Complaint Hub**
- Submit complaints with detailed descriptions
- Email-based tracking
- Subject categorization
- Status monitoring

### 5. **AI Assistant**
Interactive chatbot providing:
- Quick answers to common queries
- Department information
- Academic guidance
- 24/7 availability

### 6. **Dock-Check (Document Verification)**
ML-powered document authentication system:
- Upload document images
- AI analysis for authenticity
- Real-time verification results
- Confidence score display

**How it works:**
1. Image preprocessing (resizing, blurring, thresholding)
2. Feature extraction (OCR text length, ORB keypoints)
3. SVM classification (Real vs Fake)
4. Result with confidence score

---

## 📸 Screenshots

### Landing Page
![Landing Page](public/logo.jpg)

### Dashboard
The home dashboard provides quick access to all modules with a colorful, intuitive interface.

### Complaint System
Users can submit and track complaints efficiently through a simple form interface.

### Document Verification
AI-powered system analyzes uploaded documents and provides instant verification results.

---

## 👥 Team

This project was developed as an academic collaboration by a team of four students from the Computer Science & Artificial Intelligence Department.

### Development Team

**🗳️ Voting System Module**
- **Lead Developer:** [@DefinitelyNotABot-del](https://github.com/DefinitelyNotABot-del)
- Implemented secure electronic voting platform with PHP backend
- Developed MySQL database integration and voter authentication
- Created real-time vote counting and result visualization system
- Built admin dashboard for election management

**🔐 Authentication & Backend Services**
- Developed user registration, login, and password reset functionality
- Implemented MongoDB database integration with Mongoose ODM
- Created Express.js server architecture and RESTful API endpoints
- Built complaint management system backend

**🤖 Document Verification (AI/ML Module)**
- Designed and trained machine learning model for document authentication
- Implemented OpenCV image processing and Tesseract OCR integration
- Created SVM classifier for real/fake document detection
- Developed feature extraction algorithms (text length, ORB keypoints)

**🎨 Frontend & User Interface**
- Designed responsive and intuitive user interface across all modules
- Implemented dashboard navigation and seamless module integration
- Created custom CSS animations, gradients, and visual effects
- Ensured cross-browser compatibility and mobile responsiveness

### Project Development
- **Duration:** Academic Year 2024
- **Institution:** Computer Science & Artificial Intelligence Department
- **Type:** Collaborative Academic Project

Each team member contributed to testing, debugging, documentation, and integration throughout the development cycle.

---

## 📄 License

This project is available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Our institution's Computer Science & Artificial Intelligence Department for guidance and support
- MongoDB and Express.js documentation for backend development resources
- OpenCV and scikit-learn communities for machine learning tools and documentation
- Font Awesome for comprehensive iconography
- All open-source libraries and frameworks that made this project possible

---

<div align="center">

**Academic Project - Computer Science & Artificial Intelligence Department**

*Completed in 2024*

![Made with Node.js](https://img.shields.io/badge/Made%20with-Node.js-green?style=flat-square)
![Made with Python](https://img.shields.io/badge/Made%20with-Python-blue?style=flat-square)
![Made with PHP](https://img.shields.io/badge/Made%20with-PHP-purple?style=flat-square)

</div>
