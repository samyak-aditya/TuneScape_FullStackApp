import React, { useState , } from 'react';
import axios from 'axios';
import { Link ,useNavigate } from 'react-router-dom';

function SignupForm() {
   const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '', // Add first name field
    lastName: '',  // Add last name field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, email, firstName, lastName } = formData;

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        password,
        email,
        firstName,
        lastName,
      });

      console.log('Response from server:', response.data);

      // Reset the form after successful submission
      setFormData({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
      });

      navigate('/Login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-white-700">First Name:</label>
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border text-black font-bold rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-white-700">Last Name:</label>
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border text-black font-bold rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white-700">Username:</label>
          <input
            required
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 border text-black font-bold rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white-700">Email:</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border text-black font-bold rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white-700">Password:</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border text-black font-bold rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
        </div>
      </form>
      <p className="mt-4 text-center text-white-600">Already have an account? <Link to="/login" className='hover:text-blue-400 font-bold'>Login</Link></p>
    </div>
  );
}

export default SignupForm;
