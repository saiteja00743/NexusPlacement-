const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); // Fix for querySrv ECONNREFUSED on Windows
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));
// Add placeholder application routes directly here for speed
app.get('/api/applications', (req, res) => res.json([])); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));