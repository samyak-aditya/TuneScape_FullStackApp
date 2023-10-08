import bcrypt from "bcrypt";
import mongoose from "mongoose";
import musicUser from "../mongoSchema/user.js";



// Authentication function with password hashing
const authenticateUser = async (req, res) => {
    console.log('Inside authenticateUser');

  const { username, password } = req.body;

  try {
    // Find the user in MongoDB based on the provided username
    const user = await musicUser.findOne({ username });

    if (!user) {
      // User not found
      res.status(401).json({ success: false, message: 'User not Found' });
      console.log('User not found');
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Authentication successful
      res.status(201).json({ success: true, message: 'Login successful' });
      console.log('login success')
    } else {
      // Authentication failed
      res.status(406).json({ success: false, message: 'Incorrect password' });
      console.log('Incorrect password')
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
    console.log('Internal server error')
  }
};




const createUser = async (req, res) => {
  const { firstName, lastName, email, password, username } = req.body;

  try {
    // Check if the email or username is already registered
    const existingUser = await musicUser.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email or username already in use' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user document
    const newUser = new musicUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      username,
    });

    // Save the user to the database
    await newUser.save();
    console.log(newUser);

    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating user' });
  }
};



export { authenticateUser, createUser};


