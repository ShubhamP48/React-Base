import React from 'react';

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
  elementClasses: { 
    formContainer: string; 
    fieldContainer: string;
    fieldInput: string;
    submitButton: string;
  };
}

const BaseForm: React.FC<Props> = ({ fields, handleSubmit, elementClasses }) => {
  return (
      <form onSubmit={handleSubmit} className={elementClasses.formContainer}>
        {fields.map(field => (
          <div key={field.name} className={elementClasses.fieldContainer}>
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className={elementClasses.fieldInput}
              placeholder={field.label}
            />
          </div>
        ))}
        <div className={elementClasses.fieldContainer}>
          <button className={elementClasses.submitButton} type="submit">Submit</button>
        </div>
      </form>
  );
};

export default BaseForm;