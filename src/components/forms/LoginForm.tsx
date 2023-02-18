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
     <img src="https://www.codeinbound.com/assets/images/logo.png" alt="image description" className="mx-auto d-block" style={{ height: "100px", width: "200px" }} />

    <div className="row my-auto">
      <div className="col-4"></div>
      <div className="col-4 shadow-lg  bg-white rounded" style={{padding:"6.25rem"}}>
      <div className="text-center h1">Sign in to NMS</div>
      <div className="text-center h5">
  New Here? 
  <a href="https://example.com/create-account">Create an Account</a>
</div>

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