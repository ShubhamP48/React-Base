import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MyModal from "./MyModal";
import Users from "../demo-compenent/MainCrud";

function MyComponent() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("My Modal");

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setTitle("Are you sure?");
    setShowModal(true);
  };
  
  const handleDelete = (data) => {
    console.log(`Deleting data: ${data}`);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>
      <MyModal
        show={showModal}
        handleClose={handleClose}
        title={title}
        handleDelete={handleDelete}
        buttons={[
          {
            label: "Delete",
            variant: "danger",
          },
          {
            label: "Cancel",
            variant: "primary",
            onClick: () => console.log("Cancel clicked"),
          },
        ]}
      >
        <p>Modal content goes here.</p>
      </MyModal>
    </>
  );
}

export default MyComponent;
