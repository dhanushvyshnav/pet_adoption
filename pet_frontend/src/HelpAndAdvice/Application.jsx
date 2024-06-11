import React, { useState, useEffect } from "react";
import { Row, Col, Form, Alert, Container, Modal, Button } from "react-bootstrap";
// import axios from "axios";
// import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Application() {
  const [formData, setFormData] = useState({
    species: "",
    breed: "",
    gender: "",
    email: sessionStorage.getItem("email"),
    applicationDate: "",
    applicationStatus: false,
  });
  const [buttonColor, setButtonColor] = useState("#5F7FCD");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [validated, setValidated] = useState(false);
  const [applicationSent, setApplicationSent] = useState(false); // New state to track if the application has been sent
  const email = sessionStorage.getItem("email");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (applicationSent) {
        // Prevent multiple submissions
        setModalTitle("Alert");
        setModalMessage("Application already sent");
        setShowModal(true);
        return;
      }
      if (!formData.species || !formData.breed || !formData.gender || !email || !formData.applicationDate) {
        alert("All fields required!!");
      } else
        try {

          const response = await fetch("http://localhost:8080/application-info", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          const data = await response.json();

          if (response.ok) {
            if (data.status === "success") {
              setShowSuccess(true);
            } else {
              setShowSuccess(false);
            }
          } else {
            setShowSuccess(false);
          }

          setModalTitle(data.status === "success" ? "Success" : "Error");
          setModalMessage(data.message);
          setShowModal(true);
          setApplicationSent(data.status === "success"); // Mark the application as sent if successful

        } catch (error) {
          console.error("Error:", error);
          setShowSuccess(false);
          setModalTitle("Error");
          setModalMessage("An error occurred while processing your request.");
          setShowModal(true);
        }
    }
    setValidated(true);
  };

  useEffect(() => {
    const date = new Date();
    // substr(0, 10)-> Get today's date in YYYY-MM-DD format
    const formattedDate = date.toISOString().substr(0, 10);
    setCurrentDate(formattedDate);
  }, []);



  const handleSpeciesChange = (e) => {
    const species = e.target.value.toUpperCase();
    setFormData({ ...formData, species, breed: "" });
  };

  const handleGenderChange = (e) => {
    const gender = e.target.value;
    setFormData({ ...formData, gender });
  };

  const handleBreedChange = (e) => {
    const breed = e.target.value;
    setFormData({ ...formData, breed });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
  };

  const handleDismissModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Breed = {
    DOG: ["HUSKY", "GOLDEN_RETRIVER", "AMERICAN_BULLY", "YORKIE", "LABRADOR"],
    CAT: ["PERSIAN_CAT", "MANX", "WILD_MANX", "LITTLE_MANX"],
    RABBIT: ["WHITE_BUNNY", "BROWN_BUNNY", "PARIS_BUNNY"],
  };

  return (
    <>
      <div>
        <img
          src="https://www.petprotect.co.uk/wp-content/uploads/2023/04/Blog-1140x325px-9-1.png"
          alt="Pet Adoption"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Container className="mt-4">
        <div className="text-center">
          <h2 style={{ fontFamily: "Copperplate" }}>
            <b>Ready to Welcome a New Member?</b>
          </h2>
          <h5 style={{ fontFamily: "Copperplate" }}>
            Reach out to us using the form below. Let's discuss how you can
            give a loving home to a furry friend in need.
          </h5>
        </div>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit} className="bg-white p-4 shadow-lg rounded-lg">
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="species">
                    <Form.Label>Species</Form.Label>
                    <Form.Select onChange={handleSpeciesChange}>
                      <option value="">Select Species</option>
                      <option value="DOG">DOG</option>
                      <option value="CAT">CAT</option>
                      <option value="RABBIT">RABBIT</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="breed">
                    <Form.Label>Breed</Form.Label>
                    <Form.Select
                      defaultValue=""
                      onChange={handleBreedChange}
                      disabled={!formData.species}
                    >
                      <option value="" disabled={!formData.species}>
                        Select Breed
                      </option>
                      {formData.species &&
                        Breed[formData.species].map((breed) => (
                          <option key={breed} value={breed}>
                            {breed}
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select onChange={handleGenderChange}>
                      <option value="">Select Gender</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="applicationDate">
                    <Form.Label>Application Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="applicationDate"
                      value={formData.applicationDate}
                      onChange={handleInputChange}
                      min={currentDate}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                {/* <Col xs={12} md={6}>
                  <Form.Group controlId="applicationStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      type="text"
                      name="applicationStatus"
                      value={formData.applicationStatus ? "true" : "false"}
                      readOnly
                    />
                  </Form.Group>
                </Col> */}
                <Col xs={12} md={12}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      name="email"
                      placeholder="User Email"
                      onChange={handleEmailChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center mt-4">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ backgroundColor: buttonColor }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleDismissModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDismissModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
};

export default Application;
