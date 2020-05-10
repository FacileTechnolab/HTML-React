import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

const DownloadModal = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const { showModal, closeModal, hideDownloadBar } = props;

  const validateEmail = (text) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(text);
  };

  const handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);

      if (hasError && !validateEmail(value)) {
        setValidEmail(false);
      } else {
        setValidEmail(true);
      }
    }
  };

  const handleSubmit = () => {
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      email.trim().length === 0 ||
      !validateEmail(email)
    ) {
      setHasError(true);
      setValidEmail(false);
    } else {
      setHasError(false);
      setValidEmail(true);

      fetch("https://auto.faciletechnolab.com/api/DownloadRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            hideDownloadBar();
            window.open(
              "https://github.com/FacileTechnolab/FacileTechnolab.github.io/releases/download/1.0/HTML-React-develop.zip",
              "_blank"
            );
          },
          (error) => {}
        );
    }
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Download Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Col>
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="First name"
                value={firstName}
                isInvalid={hasError && firstName.trim().length === 0}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter last name
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Last name"
                value={lastName}
                isInvalid={hasError && lastName.trim().length === 0}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter last name
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
          <Form.Row className="pt-2">
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={email}
                isInvalid={
                  !validEmail || (hasError && email.trim().length === 0)
                }
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter {!validEmail && "valid"} email
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
        </Form>
        <div className="d-flex flex-row-reverse mt-3">
          <Button className="ml-2" type="submit" onClick={handleSubmit}>
            Download
          </Button>
          <Button
            className="ml-2"
            type="submit"
            variant="secondary"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DownloadModal;
