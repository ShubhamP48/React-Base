import FormBase from "./BaseForm";
import React, {FC} from "react";
import Table from '../demo-compenent/Table';
import { BaseCrudProps } from "../../interfaces";

const LoginForm: FC<any> = ({ 
  fieldDefinitions,
  formData,
  handleSubmit
}) => {
  return (
    <div className="d-flex flex-column maxViewHeight" style={{minHeight:"100vh"}}>
    <div className="row my-auto">
      <div className="col-4"></div>
      <div className="col-4 shadow-lg p-5 bg-white rounded">
      <div className="text-center h1">Sign in to NMS</div>
        <FormBase
          fieldDefinitions={fieldDefinitions}
          initialValues={formData}
          handleSubmit={handleSubmit}
          submitBtnClass={"btn my-5 btn-primary"}
        />
      <div className="col-4"></div>
      </div>
    </div>
    </div>

  );
};

export default LoginForm;