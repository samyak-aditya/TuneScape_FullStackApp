import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import { Sidebar } from '../components';


function LoginForm() {
  const navigate = useNavigate()
  // Initialize state using the useState hook
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Event handler to update form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Access form data from the 'formData' state object
    const { username, password } = formData;
    

  try {
    // Send a POST request to your backend API
    const response = await axios.post('http://localhost:5000/api/login', {
      username,
      password,
    });

    // Handle the response from the backend, e.g., display a success message
    console.log('Response from server:', response.data);

    // Reset the form after successful submission
    setFormData({
      username: '',
      password: '',
    });

    navigate('/')
  } catch (error) {
    // Handle errors, e.g., display an error message
    console.error('Error:', error);
  }
  
};



    // Perform form submission logic here
  

  return (
    
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white-700">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 border text-black font-bold rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white-700">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border text-black font-bold rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-grey px-4 py-2 rounded-lg hover:bg-blue-600">Login</button>
        </div>
      </form>
      {formData.username && formData.password? (
        <Sidebar username={formData.username} />
      ) : (
        null
      )}
      <p className="mt-4 text-center text-white-600">Don't have an account yet? <Link to="/signup" className='hover:text-blue-400 font-bold'>Sign up</Link></p>
    </div>
  );
}

export default LoginForm;
