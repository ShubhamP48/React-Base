import FormBase from "./BaseForm";
import React, {FC} from "react";
import Table from '../demo-compenent/Table';
import { BaseCrudProps } from "../../interfaces";

const LoginForm: FC<any> = ({ 
  fieldDefinitions,
  formData,
  showForm,
  handleSubmit
}) => {
  return (
    <div className="d-flex flex-column" style={{minHeight:"100vh"}}>
    <div className="row my-auto" >
      <div className="col-4"></div>
      <div className="col-4">
        <FormBase
          fieldDefinitions={fieldDefinitions}
          initialValues={formData}
          handleSubmit={handleSubmit}
          submitBtnClass={"btn"}
        />
      <div className="col-4"></div>
      </div>
    </div>
    </div>

  );
};

export default LoginForm;