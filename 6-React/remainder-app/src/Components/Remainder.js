import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import EditRemainder from "./EditRemainder";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  runTransaction,
} from "firebase/firestore";
import { db } from "../Config/firebase-config";

const Remainder = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [createRemainder, setCreateRemainder] = useState("");
  const [getRemainders, setGetRemainders] = useState([]);
  const [checked, setChecked] = useState([]);

  const handleCreateRemainder = async (e) => {
    try {
      e.preventDefault();
      // console.log(createRemainder);
      const docRef = await addDoc(collection(db, "remainders"), {
        remainder: createRemainder,
        isChecked: false,
        timestamp: serverTimestamp(),
      });
      alert("Remainder created successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRemainder = async (id) => {
    try {
      if (window.confirm("Are you sure to delete the data?")) {
        await deleteDoc(doc(db, "remainders", id));
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChecked = async (e, remainder) => {
    setChecked((state) => {
      const indexToUpdate = state.findIndex(
        (checked) => checked.remainder === remainder
      );
      // console.log(indexToUpdate);
      let newState = [...state];
      newState.splice(indexToUpdate, 1, {
        ...state[indexToUpdate],
        isChecked: !state[indexToUpdate].isChecked,
      });
      setGetRemainders(newState);
      console.log(newState);
      return newState;
    });
    const remainderRef = doc(db, "remainders", e.target.name);
    // console.log(e.target.name);
    try {
      await runTransaction(db, async (transaction) => {
        const remainderDoc = await transaction.get(remainderRef);
        if (!remainderDoc.exists()) {
          throw "Document does not exist!";
        }
        transaction.update(remainderRef, {
          isChecked: !remainderDoc.data().isChecked,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getRemaindersFun() {
      const remainderSnapShot = await getDocs(collection(db, "remainders"));
      console.log(remainderSnapShot);
      const dataArr = remainderSnapShot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log(dataArr);
      setGetRemainders(dataArr);
      setChecked(dataArr);
    }
    getRemaindersFun();
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="display-3 text-center">REMAINDER APP</h2>
        <div className="row mb-4">
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
                      <Form.Control
                        type="text"
                        placeholder="Add remainder"
                        value={createRemainder}
                        onChange={(e) => setCreateRemainder(e.target.value)}
                      />
                    </FloatingLabel>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleCreateRemainder}>
                      Create Remainder
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </Card.Body>
          </Card>
        </div>
        <div className="container">
          {getRemainders.map(({ id, remainder, isChecked, timestamp }) => (
            <div className="row" key={id}>
              <div className="col-8">
                <span className={isChecked ? "done" : ""}>
                  <div className="checker">
                    <span>
                      <input
                        type="checkbox"
                        name={id}
                        onChange={(e) => handleChecked(e, remainder)}
                      />
                    </span>
                  </div>
                  {remainder}
                  <div>
                    <i>{new Date(timestamp.seconds * 1000).toLocaleString()}</i>
                  </div>
                </span>
              </div>
              <div className="col-4 d-flex pt-3">
                <EditRemainder editRemainder={remainder} id={id} />
                <div style={{ marginRight: "200px" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRemainder(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Remainder;
