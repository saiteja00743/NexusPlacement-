const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  type: { type: String, enum: ['Full Time', 'Part Time', 'Internship'], required: true },
  location: { type: String, required: true },
  ctc: { type: String, required: true },
  minCgpa: { type: Number, required: true },
  eligibleBranches: [{ type: String }],
  description: { type: String, required: true },
  status: { type: String, enum: ['Open', 'Closed'], default: 'Open' },
  deadline: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);