//authController.js

const User = require("../models/User");

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public
exports.signup = async (req, res) => {
  try {
    const { email, firstName, lastName, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ 
        message: "Passwords don't match", 
        alert: false 
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        message: "Email is already registered", 
        alert: false 
      });
    }

    // Create new user (password will be hashed in the pre-save hook)
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      image: req.body.image || ""
    });

    res.status(201).json({
      message: "Successfully signed up",
      alert: true
    });
    
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ 
      message: "Signup failed", 
      error: error.message,
      alert: false
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email and explicitly include password for comparison
    const user = await User.findOne({ email }).select("+password");
    
    // Check if user exists
    if (!user) {
      return res.status(401).json({ 
        message: "Email not found, please sign up", 
        alert: false 
      });
    }

    // Check if password is correct
    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ 
        message: "Invalid credentials", 
        alert: false 
      });
    }

    // Create user data to send back (excluding password)
    const userData = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      image: user.image
    };

    res.status(200).json({
      message: "Login successful",
      alert: true,
      data: userData
    });
    
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ 
      message: "Login failed", 
      error: error.message,
      alert: false
    });
  }
};