import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = () => {
    return (
        <div className="project-info">
            <div className="info-header">
                <h1>Spring Boot + React Auth App</h1>
                <p>
                    A full-stack authentication application demonstrating modern web development practices,
                    secure authentication flows, and seamless frontend-backend integration.
                </p>
            </div>

            <div className="tech-stack">
                <div className="stack-card">
                    <h3>Frontend</h3>
                    <ul>
                        <li>React.js (Vite)</li>
                        <li>React Router DOM</li>
                        <li>Axios for API calls</li>
                        <li>CSS Modules / Vanilla CSS</li>
                        <li>Context API for State</li>
                    </ul>
                </div>

                <div className="stack-card">
                    <h3>Backend</h3>
                    <ul>
                        <li>Spring Boot 3.x</li>
                        <li>Spring Security 6</li>
                        <li>Spring Data JPA</li>
                        <li>Hibernate</li>
                        <li>Maven</li>
                    </ul>
                </div>

                <div className="stack-card">
                    <h3>Security & Auth</h3>
                    <ul>
                        <li>OAuth2 (Google Login)</li>
                        <li>JWT (JSON Web Tokens)</li>
                        <li>HttpOnly Cookies</li>
                        <li>BCrypt Password Hashing</li>
                        <li>CORS Configuration</li>
                    </ul>
                </div>

                <div className="stack-card">
                    <h3>Database</h3>
                    <ul>
                        <li>MySQL 8.0</li>
                        <li>JPA / Hibernate ORM</li>
                        <li>Database Migration</li>
                    </ul>
                </div>
            </div>

            <div className="features-section">
                <h2>Key Features</h2>
                <div className="feature-grid">
                    <div className="feature-item">🔐 Secure Login/Signup</div>
                    <div className="feature-item">🌐 Google OAuth2 Integration</div>
                    <div className="feature-item">🛡️ Protected Routes</div>
                    <div className="feature-item">🔄 JWT Token Management</div>
                    <div className="feature-item">📱 Responsive Design</div>
                    <div className="feature-item">🔌 RESTful API Architecture</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;
