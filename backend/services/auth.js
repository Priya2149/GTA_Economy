import axios from 'axios';

const login = async (email, password) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);  // Store JWT token
    return response.data;
};

export { login };
