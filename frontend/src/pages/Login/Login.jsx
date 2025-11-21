import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Input from '../../components/Input';
import './Login.css';

// This URL must match the Spring Boot configuration
const GOOGLE_AUTH_URL = `http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:5173/oauth2/redirect`;

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
            toast.success('Successfully logged in!');
            navigate('/');
        } catch (error) {
            toast.error('Login failed: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Welcome Back</h2>

                <form onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button type="submit" className="btn">Login</button>
                </form>

                <div className="divider">OR</div>

                <a href={GOOGLE_AUTH_URL} className="googleBtn">
                    Login with Google
                </a>

                <p className="footer">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;