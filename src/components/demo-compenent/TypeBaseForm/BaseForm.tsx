import React, { useState } from 'react';

interface Field {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props {
  fields: Field[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const BaseForm: React.FC<Props> = ({ fields, handleSubmit }) => {
  return (
    <div   className='p-12 shadow-sm bg-white rounded w-50'>
      <form onSubmit={handleSubmit}  className='form w-100' id='kt_login_signin_form'>
        {fields.map(field => (
          <div key={field.name} style={{display: "grid", justifyItems:"left"}} className='fv-row mb-10'>
            <label htmlFor={field.name} className='form-label fs-6 fw-bolder  text-left text-dark'>{field.label}</label>
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className='form-control form-control-lg form-control-solid'
            />
          </div>
        ))}
        <button 
            id='kt_sign_in_submit'
            className='btn btn-lg btn-primary w-100 mb-5' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BaseForm;