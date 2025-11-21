import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();

    if (!user) return null;

    return (
        <nav className="navbar">
            <div className="nav-brand">AuthApp</div>
            <div className="nav-user">
                <div className="nav-info">
                    <span className="nav-name">{user.name}</span>
                    <span className="nav-email">{user.email}</span>
                </div>
                {user.imageUrl ? (
                    <img
                        src={user.imageUrl}
                        alt="Profile"
                        className="nav-avatar"
                    />
                ) : (
                    <div className="nav-avatar-placeholder">
                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                )}
                <button onClick={logout} className="nav-logout">Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
