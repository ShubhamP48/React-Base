import React from 'react';
import { Props } from './BaseForm.interface'

const BaseForm: React.FC<Props> = ({ fields, handleSubmit, elementClasses, btnText = 'Submit' }) => {
  return (
      <form onSubmit={handleSubmit} className={elementClasses.formContainer}>
        {fields.map(field => (
          <div key={field.name} className={field.classes.container}>
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className={field.classes.input}
              placeholder={field.label}
            />
          </div>
        ))}
        <div className={elementClasses.buttonContainer}>
          <button className={elementClasses.submitButton} type="submit">{btnText}</button>
        </div>
      </form>
  );
};

export default BaseForm;