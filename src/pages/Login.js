import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await login(username, password);
        if (data.token) {
            localStorage.setItem('token', data.token);
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;