import DynamicForm from "./BaseForm";
import React, {FC} from "react";
import Table from './Table'
import { BaseCrudProps } from "../../interfaces";
import MyModal from "../forms/MyModal";
import MyComponent from "../forms/MyComponent";

const DynamicCrudBaseView: FC<BaseCrudProps> = ({ 
  fieldDefinitions,
  data,
  columns,
  formData,
  showForm,
  handleSubmit,
  handleCreate,
  handleDelete,

}) => {
  return (
    <div>
      <button onClick={handleCreate}>Create</button>
      {showForm && (
        <DynamicForm
          fieldDefinitions={fieldDefinitions}
          initialValues={formData}
          handleSubmit={handleSubmit}
          submitBtnClass={"text-center"}
        />
      )}
      <Table
        data={data}
        columns={columns}
      />
 
      
    </div>
  );
};

export default DynamicCrudBaseView;