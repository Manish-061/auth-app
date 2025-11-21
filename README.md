# AuthApp - Full Stack Authentication System

A robust and secure authentication application built with a Spring Boot backend and a React frontend. This project demonstrates a complete authentication flow including Email/Password login, OAuth2 (Google) integration, JWT-based session management, and protected routes.

## 🚀 Features

- **User Authentication**: Secure Sign Up and Login using Email and Password.
- **OAuth2 Integration**: Social login support with Google.
- **JWT Security**: Stateless authentication using JSON Web Tokens.
- **Protected Routes**: Secure frontend routes accessible only to authenticated users.
- **Responsive Design**: Modern and responsive UI built with React and CSS.
- **Toast Notifications**: Real-time feedback for user actions.

## 🛠️ Tech Stack

### Backend
- **Java 21**
- **Spring Boot**: Core framework.
- **Spring Security**: Authentication and Authorization.
- **Spring Data JPA**: Database interaction.
- **MySQL**: Relational database.
- **OAuth2 Client**: Social login handling.
- **JWT (jjwt)**: Token generation and validation.
- **Lombok**: Boilerplate code reduction.

### Frontend
- **React 19**: UI Library.
- **Vite**: Build tool.
- **React Router DOM**: Client-side routing.
- **Axios**: HTTP client.
- **React Hot Toast**: Notifications.
- **CSS Modules / Vanilla CSS**: Styling.

## 📂 Project Structure

```
AuthApp/
├── authentication/    # Spring Boot Backend
└── frontend/          # React Frontend
```

## ⚙️ Getting Started

### Prerequisites

- Java 21 SDK
- Node.js & npm
- MySQL Server

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd authentication
    ```

2.  **Configure Database & OAuth:**
    Create a `application.properties` file in `src/main/resources/` (if not present) and configure your environment variables.
    
    *Example `application.properties`:*
    ```properties
    spring.application.name=authentication
    server.port=8080
    
    # Database Configuration
    spring.datasource.url=jdbc:mysql://localhost:3306/auth_db?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    spring.datasource.username=root
    spring.datasource.password=your_password
    spring.jpa.hibernate.ddl-auto=update
    
    # OAuth2 Configuration (Google)
    spring.security.oauth2.client.registration.google.client-id=YOUR_GOOGLE_CLIENT_ID
    spring.security.oauth2.client.registration.google.client-secret=YOUR_GOOGLE_CLIENT_SECRET
    spring.security.oauth2.client.registration.google.redirect-uri={baseUrl}/oauth2/callback/{registrationId}
    spring.security.oauth2.client.registration.google.scope=email, profile
    
    # JWT Configuration
    app.auth.tokenSecret=YOUR_JWT_SECRET_KEY_MUST_BE_LONG_ENOUGH
    app.auth.tokenExpirationMsec=86400000
    
    # Frontend URL (CORS)
    app.cors.allowedOrigins=http://localhost:5173
    ```

3.  **Run the Application:**
    ```bash
    # On Windows
    ./mvnw.cmd spring-boot:run
    
    # On Linux/Mac
    ./mvnw spring-boot:run
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

4.  **Access the App:**
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
