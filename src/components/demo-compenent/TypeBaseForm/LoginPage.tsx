import React from 'react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  const handleLogin = (values: { email: string; password: string }) => {
    // Perform login logic here, such as sending a request to a server to validate the credentials
    console.log(`Logging in with email: ${values.email} and password: ${values.password}`);
  };

  return (
    <div className='container bg-subtle'>
      <h2 className='row justify-content-center'>Login</h2>
      <LoginForm className='row justify-content-center w-50' handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;