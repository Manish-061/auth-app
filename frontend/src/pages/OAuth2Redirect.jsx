import { useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const OAuth2Redirect = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const processed = useRef(false);

    useEffect(() => {
        if (processed.current) return;
        processed.current = true;

        const token = searchParams.get('token');
        const error = searchParams.get('error');

        if (token) {
            setToken(token).then(() => {
                toast.success('Successfully logged in with Google!');
                navigate('/');
            });
        } else {
            toast.error('OAuth2 Login Failed: ' + (error || 'Unknown error'));
            navigate('/login');
        }
    }, [searchParams, navigate, setToken]);

    return <div>Processing login...</div>;
};

export default OAuth2Redirect;