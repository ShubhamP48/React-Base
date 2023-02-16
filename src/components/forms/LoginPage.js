import React, { useState } from "react";
import LoginForm from './LoginForm'

const LoginPage = () => {
    const fieldDefinitions = [
        {
            name: "email",
            label: "Email",
            type: "email",
            classes: {
                container: 'p-3',
                input: 'form-control'
            },
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            classes: {
                container: 'p-3',
                input: 'form-control'
            }
        }
    ];

    const initialValues = {
        email: "",
        password: ""
    };

    const [formData, setFormData] = useState(initialValues);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (values) => {
        setFormData(initialValues);
        setShowForm(false);
    };

    return (
        <>
            <LoginForm
                fieldDefinitions={fieldDefinitions}
                formData={formData}
                showForm={showForm}
                handleSubmit={handleSubmit}
            />
        </>
    );
};

export default LoginPage;