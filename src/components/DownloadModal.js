import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios"

const DownloadModal = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const { modalType, showModal, closeModal, hideDownloadBar } = props;

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
  const closeDownloadModal = () => {
    props.closeModal();
  }
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
      closeDownloadModal();
      axios.post("https://auto.faciletechnolab.com/DownloadRequest", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        segment3: modalType,
        segment1: 'github.io',
        segment2: 'react',
      }).then((result) => {
        if (modalType === "download") {
          window.open(
            "https://github.com/FacileTechnolab/HTML-React/archive/refs/heads/develop.zip",
            "_blank"
          );
        }
      });
    }
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {modalType === "download" ? "Download React Theme" : "Hire Us"}
        </Modal.Title>
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
        <div className="d-flex justify-content-center mt-3">
          <Button className="ml-2" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DownloadModal;
