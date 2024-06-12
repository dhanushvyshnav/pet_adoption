// PetLogin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PetLogin.css';
import axios from 'axios';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import { DataContext } from '../NavBar/AuthContext';

const PetLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = DataContext();

    const handleRegister = async () => {
        if (!email || !password || !username) {
            setError('Please fill in all fields.');
            return;
        }
        if (!email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/register', {
                username: username,
                email: email,
                password: password,
            });

            if (response.data.error) {
                setError(response.data.message);
            } else {
                setError('');
                if (response.data.message) {
                    alert(response.data.message);
                    navigate('/siginIn');
                } else {
                    setError('Email or username is already in use. Please choose another.');
                }
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setError('Failed to register. Please try again later.');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/login', {
                email: email,
                password: password,
            });

            if (response.data.error) {
                setError(response.data.message);
            } else {
                login(); // Set the authentication state to true
                navigate('/'); // Redirect to home page or any other page
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError('Failed to login. Please try again later.');
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <img src="https://img.freepik.com/premium-vector/cute-little-dogs-with-welcome-home-wood-sign-vector-illustration_41984-644.jpg?w=740" alt="Welcome" style={{ width: '300px', height: 'auto' }} />
                <div className="text">Register</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <EmailOutlinedIcon />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <LockOpenTwoToneIcon />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input">
                    <PersonIcon />
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
            </div>
            <div className="error-message">{error}</div>
            <div className="center" style={{
                textAlign: 'center', marginTop: '20px'
            }}>
                <p>Have an account?<Link to='/siginIn'>Login</Link></p>
            </div>
            <div className="submit-container" style={{ marginTop: '10px' }}>
                <div className="submit" onClick={handleRegister}>Register</div>
                {/* <div className="submit" onClick={handleLogin}>Login</div> */}
            </div>
        </div>
    );
};

export default PetLogin;
