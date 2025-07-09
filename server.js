const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3019;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/student', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Schema and Models
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

const complaintSchema = new mongoose.Schema({
  email: String,
  subject: String,
  issue: String,
});

const Complaint = mongoose.model('Complaint', complaintSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the server! Use /register, /signin, /complain, /reset-password, or /update-profile to interact with the API.');
});

// User Registration
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Account already exists' });
    }

    const newUser = new User({ username, password, email });
    await newUser.save();
    res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User Sign-in
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      return res.status(200).json({ message: 'Signin successful' });
    }
    res.status(400).json({ message: 'Incorrect details' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Reset Password Route
app.post('/reset-password', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.password = password;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ message: 'An error occurred while updating the password' });
  }
});

// User Profile Update
app.put('/update-profile', async (req, res) => {
  const { cemail, email, username, password } = req.body;

  if (!cemail || !email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Find user by current email
    const user = await User.findOne({ email: cemail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user details
    user.email = email;
    user.username = username;
    user.password = password;
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'An error occurred while updating the profile' });
  }
});

// Complaint Submission
app.post('/post', async (req, res) => {
  const { email, subject, issue } = req.body;

  if (!email || !subject || !issue) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const complaint = new Complaint({ email, subject, issue });
    await complaint.save();
    res.status(200).json({ message: 'Complaint submitted successfully' });
  } catch (error) {
    console.error('Error saving complaint:', error);
    res.status(500).json({ message: 'An error occurred while submitting the complaint' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
