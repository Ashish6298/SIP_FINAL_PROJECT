const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    
    
    LastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Student_Data", studentSchema);