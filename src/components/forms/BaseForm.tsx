import React, {FC} from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { BaseFormProps } from '../../interfaces';

const FormBase: FC<BaseFormProps> = ({ 
  fieldDefinitions,
  initialValues,
  handleSubmit,
  submitBtnClass
 }) => {
  const validationSchema = Yup.object().shape({
    ...fieldDefinitions.reduce((acc:any, field) => {
      let validation;
      switch (field.type) {
        case "text":
        case "password":
          validation = Yup.string().required(`${field.label} is required`);
          break;
        case "number":
          validation = Yup.number().required(`${field.label} is required`).typeError(`${field.label} must be a number`).positive(`${field.label} must be a positive number`);
          break;
        case "email":
          validation = Yup.string().required(`${field.label} is required`).email(`${field.label} must be a valid email`);
          break;
        case "date":
          validation = Yup.date().required(`${field.label} is required`).min(new Date(), `${field.label} must be in the future`);
          break;
        case "checkbox":
          validation = Yup.boolean().required(`${field.label} is required`);
          break;
        default:
          validation = Yup.string().required(`${field.label} is required`);
          break;
      }
      acc[field.name] = validation;
      return acc;
    }, {}),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <Form>
          {fieldDefinitions.map((field, index) => (
            <div key={index} className={field.classes.container}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === "checkbox" ? (
                <Field
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  checked={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={field.classes.input}
                />
              ) : (
                <Field
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={field.classes.input}
                />
              )}
              {errors[field.name] && <span><>{errors[field.name]}</></span>}
            </div>
          ))}
          <div>
          <button className={submitBtnClass} type="submit">Save</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormBase;