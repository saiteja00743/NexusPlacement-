const express = require('express');
const router = express.Router();
const { createJob, getJobs } = require('../controllers/jobController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getJobs)
  .post(protect, authorizeRoles('recruiter', 'admin', 'po'), createJob);

module.exports = router;