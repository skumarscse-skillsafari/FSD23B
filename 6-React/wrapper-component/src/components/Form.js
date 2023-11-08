import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import FileBase64 from "react-file-base64";
const FormComponent = () => {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    fileUpload: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleFormFields = (e) => {
    if (e.target.type === "checkbox") {
      let options = formFields.hobbies;
      options.push(e.target.value);
      setFormFields((prev) => {
        return {
          ...prev,
          hobbies: options,
        };
      });
    } else {
      const { name, value } = e.target;
      // console.log(name, value); // "firstName"
      setFormFields((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1 className="display-5 text-center m-4">Form Validation</h1>
        <Row className="mb-3">
          <Col>
            <Form.Control
              placeholder="First name"
              type="text"
              name="firstName"
              value={formFields.firstName}
              onChange={handleFormFields}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              type="text"
              name="lastName"
              value={formFields.lastName}
              onChange={handleFormFields}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              placeholder="Email"
              type="email"
              name="email"
              value={formFields.email}
              onChange={handleFormFields}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Password"
              type="password"
              name="password"
              value={formFields.password}
              onChange={handleFormFields}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Gender</Form.Label>
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              value="Male"
              onChange={handleFormFields}
            />
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              value="Female"
              onChange={handleFormFields}
            />
            <Form.Check
              type="radio"
              label="Others"
              name="gender"
              value="Others"
              onChange={handleFormFields}
            />
          </Col>
          <Col>
            <Form.Label>Hobbies</Form.Label>
            <Form.Check
              type="checkbox"
              label="Cricket"
              name="hobbies"
              value="Cricket"
              onChange={handleFormFields}
            />
            <Form.Check
              type="checkbox"
              label="Football"
              name="hobbies"
              value="Football"
              onChange={handleFormFields}
            />
            <Form.Check
              type="checkbox"
              label="Web Series"
              name="hobbies"
              value="Web Series"
              onChange={handleFormFields}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload resume</Form.Label> <br />
            <FileBase64
              type="file"
              name="fileUpload"
              value={formFields.fileUpload}
              onDone={({ base64 }) =>
                setFormFields((prev) => {
                  return {
                    ...prev,
                    fileUpload: base64,
                  };
                })
              }
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address </Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              type="text"
              name="address"
              value={formFields.address}
              onChange={handleFormFields}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              name="city"
              value={formFields.city}
              onChange={handleFormFields}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Label>State</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            name="state"
            onChange={handleFormFields}
          >
            <option value="">Choose state</option>
            <option value="Tamilnadu">Tamilnadu</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Maharastra">Maharastra</option>
          </Form.Select>
        </Row>
        <Row className="mb-3">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            placeholder="Enter zipcode"
            type="number"
            name="zipcode"
            value={formFields.zipcode}
            onChange={handleFormFields}
          />
        </Row>
        <Row>
          <Button variant="primary" type="submit" className="mb-2">
            Submit
          </Button>{" "}
          <Button variant="danger" type="clear">
            Cancel
          </Button>{" "}
        </Row>
      </Form>
      <hr />
      <a href={formFields.fileUpload} target="_blank" rel="noreferrer">
        Click here
      </a>
    </Container>
  );
};

export default FormComponent;
