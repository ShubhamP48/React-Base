import { BaseFormFieldDefinitions, InitialValues } from './Common';

export interface BaseFormProps {
  fieldDefinitions: BaseFormFieldDefinitions[];
  initialValues: InitialValues;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  // elementClasses: {
  //   formContainer: string;
  //   submitButton: string;
  //   buttonContainer: string;
  // };
  // classes: {
  //   container: string;
  //   input: string;
  // };
}

export interface Field2 {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 }

export interface Props {
  fields: Field2[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  elementClasses: {
    formContainer: string;
    submitButton: string;
    buttonContainer: string;
  };
  btnText: string;
}
