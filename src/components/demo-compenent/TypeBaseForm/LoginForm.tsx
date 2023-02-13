import React, { useState } from 'react';
import BaseForm from './BaseForm';

interface LoginFormProps {
  handleLogin: (values: { email: string; password: string }) => void;
  className: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleLogin, className = "" }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin({ email, password });
  };

  const fields = [
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      value: email,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(event.target.value),
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      value: password,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(event.target.value),
    },
  ];

  const formClasses = {
    formContainer: 'container p-6',
    fieldContainer: 'row p-3',
    fieldInput: 'form-control',
    submitButton: 'btn btn-primary',
  }

  return (
    <div className={`container shadow-sm p-0 m-0${className}`}>
      <BaseForm elementClasses={formClasses} fields={fields} handleSubmit={handleSubmit} />
    </div>
  );
};

export default LoginForm;
