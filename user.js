const mongoose = require("mongoose");
const options = {
  timestamps: {
    createdAt: "createdOn",
    updatedAt: "updatedOn",
  },
};

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    lowercase: true,
    trim: true,
  },
  lastName: {
    type: String,
    lowercase: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },

},
options,
);
const User = mongoose.model("User", userSchema, "Users");
module.exports = User;
