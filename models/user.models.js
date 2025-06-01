import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value) => {
        return value.length > 2;
      },
      message: "Name should be greater than 2 characters",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
    },
  },

  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return value.length > 6;
      },
      message: "Password should be greater than 6 characters",
    },
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  VerificationCode: {
    type: String,
    deafult: 1234,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
