import React from 'react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  const handleLogin = (values: { email: string; password: string }) => {
    // Perform login logic here, such as sending a request to a server to validate the credentials
    console.log(`Logging in with email: ${values.email} and password: ${values.password}`);
  };

  return (
    <div style={{display: "grid", justifyItems:"center"}} >
      <h2 style={{padding: '3rem'}}>Login</h2>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;