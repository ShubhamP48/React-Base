import { Modal, Button } from "react-bootstrap";
import { ReactNode, useState, FC } from "react";

interface ModalProps {
  title: string;
  children?: ReactNode;
  mainButtonText?: string;
  action: () => void;
  launchButtonText: string;
}

const MyModal: FC<ModalProps> = ({
  title,
  children,
  mainButtonText = "Continue",
  action = () => {
    console.log("Confirm Button CLicked");
  },
  launchButtonText
}) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    action();
    handleClose();
  };

  return (
    <>
      <Button variant= 'secondary' onClick={handleShow}>
        {launchButtonText}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {mainButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
