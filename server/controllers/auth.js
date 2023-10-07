import bcrypt from "bcrypt";
import mongoose from "mongoose";
import User from "../mongoSchema/user";

const User = mongoose.model('User');

// Authentication function with password hashing
const authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in MongoDB based on the provided username
    const user = await User.findOne({ username });

    if (!user) {
      // User not found
      return { success: false, message: 'User not found' };
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Authentication successful
      return { success: true, message: 'Login successful' };
    } else {
      // Authentication failed
      return { success: false, message: 'Incorrect password' };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Internal server error' };
  }
};




const createUser = async (req, res) => {
  const { firstName, lastName, email, password, username } = req.body;

  try {
    // Check if the email or username is already registered
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or username already in use' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user document
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      username,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating user' });
  }
};



module.exports = { authenticateUser, createUser};


