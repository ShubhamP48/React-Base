import React, { useState } from "react";
import LoginForm from './LoginForm'

const LoginPage = () => {
    const fieldDefinitions = [
        {
            name: "email",
            label: "Email",
            type: "email",
            classes: {
                container: 'my-5',
                input: 'form-control',
                label: "fw-bolder py-5"
            },
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            classes: {
                container: 'my-5',
                input: 'form-control',
                label: "fw-bolder py-5"
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
        console.log(values)
    };

    return (
        <div>
            <LoginForm
                fieldDefinitions={fieldDefinitions}
                formData={formData}
                showForm={showForm}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default LoginPage;