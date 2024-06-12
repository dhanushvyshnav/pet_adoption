import React, { useState } from 'react';
import './PetLogin.css';
import axios from 'axios';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { DataContext } from '../NavBar/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { setIsAuthenticated, setIsLogin, login } = DataContext();

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!email) {
            setError('Please enter your email.');
            return;
        }

        if (!password) {
            setError('Please enter your password.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/signin', {
                email: email,
                password: password,
            });
            sessionStorage.setItem("email", response.data.data.email);
            sessionStorage.setItem("username", response.data.data.username);
            console.log(response.data.data);

            if (response.data) {
                alert("Login Successful");
                login(); // This will set isAuthenticated and isLogin to true and update sessionStorage
                setError('');
                navigate('/pets-list');
            } else {
                console.log(email + password + response.data.message + response);
                setError(response.data.error || 'Invalid email or password. Please try again.');
                alert("Invalid email or password. Please try again");
            }
        } catch (error) {
            console.error("Login unsuccessful:", error);
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <img src="https://img.freepik.com/premium-vector/cute-little-dogs-with-welcome-home-wood-sign-vector-illustration_41984-644.jpg?w=740" alt="Welcome" style={{ width: '300px', height: 'auto' }} />
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSignIn}>
                <div className="inputs">
                    <div className="input">
                        <img src={EmailTwoToneIcon} alt="" />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src={LockOpenTwoToneIcon} alt="" />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="center" style={{ textAlign: 'center', marginTop: '20px' }}>
                    <p>Don't have an account? <a href='/login'>Register</a></p>
                </div>
                <div className="submit-container" style={{ marginTop: "10px" }}>
                    <button type="submit" className="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
