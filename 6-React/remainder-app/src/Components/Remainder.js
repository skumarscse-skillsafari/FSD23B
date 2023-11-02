import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Remainder = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let sampleData = [
    {
      id: 10001,
      remainder: "Study HTML",
      isChecked: false,
      timestamp: new Date(),
    },
    {
      id: 10002,
      remainder: "Study CSS",
      isChecked: true,
      timestamp: new Date(),
    },
    {
      id: 10003,
      remainder: "Study React",
      isChecked: false,
      timestamp: new Date(),
    },
    {
      id: 10004,
      remainder: "Study Node",
      isChecked: true,
      timestamp: new Date(),
    },
    {
      id: 10005,
      remainder: "Study Express",
      isChecked: false,
      timestamp: new Date(),
    },
  ];
  return (
    <>
      <div className="container">
        <h2 className="display-3 text-center">REMAINDER APP</h2>
        <div className="row">
          <Card>
            <Card.Body>
              <>
                <Button variant="primary" onClick={handleShow}>
                  ADD REMAINDER
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Create Remainder</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Add remainder"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="Add remainder" />
                    </FloatingLabel>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Create Remainder</Button>
                  </Modal.Footer>
                </Modal>
              </>
            </Card.Body>
          </Card>
        </div>
        <div className="container">
          {sampleData.map(({ id, remainder, isChecked, timestamp }) => (
            <div className="row" key={id}>
              <hr />
              <div className="col-8">
                <span className="done">
                  <div className="checker">
                    <span className="">
                      <input type="checkbox" />
                    </span>
                  </div>
                  {remainder}
                  <div>
                    <i>{String(timestamp)}</i>
                  </div>
                </span>
              </div>
              <div className="col-4 pt-3">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger ms-3">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Remainder;
