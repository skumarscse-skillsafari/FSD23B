import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Config/firebase-config";

const EditRemainder = ({ editRemainder, id }) => {
  const [remainder, setRemainder] = useState(editRemainder);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditRemainder = async (e) => {
    try {
      e.preventDefault();
      if (window.confirm("Are you sure to update the data?")) {
        const remainderRef = doc(db, "remainders", id);
        // console.log(remainderRef);
        await updateDoc(remainderRef, {
          remainder: remainder,
          timestamp: new Date(),
        });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Remainder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Edit remainder"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Edit remainder"
              value={remainder}
              onChange={(e) => setRemainder(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditRemainder}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditRemainder;
