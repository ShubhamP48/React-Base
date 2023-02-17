import { Modal, Button } from "react-bootstrap";
import React from "react";

function MyModal(props) {
  const handleDeleteClick = () => {
    props.handleDelete(props.data);
    props.handleClose();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        {props.buttons &&
          props.buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              onClick={
                button.label === "Delete" ? handleDeleteClick : button.onClick
              }
            >
              {button.label}
            </Button>
          ))}
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
