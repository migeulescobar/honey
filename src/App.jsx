import React, { useState } from 'react';
import NavbarComp from './components/navegation';
import RecoveryForm from './components/modules/RecoveryForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRecoveryForm, setShowRecoveryForm] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    
    // Verifica las credenciales (esto es solo un ejemplo)
    if (username === 'honey' && password === '123') {
      setIsAuthenticated(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleRecovery = () => {
    setShowRecoveryForm(true);
  };

  const handleBackToLogin = () => {
    setShowRecoveryForm(false);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    margin: 0,
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
  };

  const headingStyle = {
    margin: '0 0 20px 0',
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    color: '#666',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const linkStyle = {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    color: '#007bff',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <>
      {isAuthenticated ? (
        <NavbarComp />
      ) : (
        <div style={containerStyle}>
          {!showRecoveryForm ? (
            <form style={formStyle} onSubmit={handleLogin}>
              <h2 style={headingStyle}>Iniciar sesión</h2>
              <div style={formGroupStyle}>
                <label htmlFor="username" style={labelStyle}>Nombre de usuario:</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label htmlFor="password" style={labelStyle}>Clave:</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={inputStyle}
                />
              </div>
              <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Iniciar sesión
              </button>
              <a
                style={linkStyle}
                onClick={handleRecovery}
              >
                Olvidé mi clave
              </a>
            </form>
          ) : (
            <RecoveryForm onBackToLogin={handleBackToLogin} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
