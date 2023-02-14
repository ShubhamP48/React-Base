export interface Field {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    classes: {
      container: string;
      input: string;
    }
  }
  
export  interface Props {
    fields: Field[];
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    elementClasses: { 
      formContainer: string; 
      submitButton: string;
      buttonContainer: string;
    };
    btnText: string;
  }