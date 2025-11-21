import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Input from '../../components/Input';
import './Signup.css';

// This URL must match the Spring Boot configuration
const GOOGLE_AUTH_URL = `http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:5173/oauth2/redirect`;

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData.name, formData.email, formData.password);
            toast.success('Signup successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error('Signup failed: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>
                    <Input
                        label="Name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <Input
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                    <button type="submit" className="btn">Sign Up</button>
                </form>

                <div className="divider">OR</div>

                <a href={GOOGLE_AUTH_URL} className="googleBtn">
                    Sign up with Google
                </a>

                <p className="footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
