const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'recruiter', 'po', 'admin'], default: 'student' },
  
  // Student Specific
  studentDetails: {
    degree: String,
    branch: String,
    passingYear: Number,
    cgpa: Number,
    skills: [String],
    resumeUrl: String,
    phone: String,
    linkedinUrl: String,
  },
  
  // Recruiter Specific
  companyDetails: {
    companyName: String,
    website: String,
    industry: String,
  },
  
  status: { type: String, enum: ['Pending', 'Active', 'Rejected'], default: 'Active' }
}, { timestamps: true });

userSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);