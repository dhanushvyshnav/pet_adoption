import React, { useState, useEffect } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Row, Col, Form, Button, Alert, Modal } from "react-bootstrap";
import Footer from '../Footer/Footer';
import { DataContext } from '../NavBar/AuthContext';
import { Link } from 'react-router-dom';

const ListPets = () => {
  const [likedPets, setLikedPets] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [buttonColor, setButtonColor] = useState("#5F7FCD");
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Pets");
  const { isLogin, setIsLogin } = DataContext();
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [formData, setFormData] = useState({
    species: "",
    photoUrl: "",
    location: "",
    adoptionFee: "",
    breed: "",
    email: sessionStorage.getItem("email"),
    gender: "",
    description: "",
  });
  const username = sessionStorage.getItem("username");

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (selectedSpecies && !selectedBreed) {
      setSelectedBreed(Breed[selectedSpecies][0]);
      setFormData({ ...formData, breed: Breed[selectedSpecies][0] });
    }
  },
    [selectedSpecies]
  );

  const toggleLike = (pet) => {
    setLikedPets((prevLikedPets) =>
      prevLikedPets.includes(pet)
        ? prevLikedPets.filter((p) => p !== pet)
        : [...prevLikedPets, pet]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {

        const response = await fetch("http://localhost:8080/addPet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (response.ok) {
          if (data.registered) {
            setShowSuccess(true);
            console.log(response.data.email)
            setButtonColor("green");
            console.log("Pet added successfully!");
            console.log(response);
          } else {
            setShowSuccess(false);
            // alert("Please register to add pets");
            setShowSuccess(true);
            setButtonColor("green");
            console.log("Pet added successfully!");
          }
        } else {
          console.error("Failed to add pet");
        }
      } catch (error) {
        alert("Please register to add pets");
      }
    }
    setValidated(true);
  };

  const Breed = {
    DOG: ["HUSKY", "GOLDEN_RETRIVER", "AMERICAN_BULLY", "YORKIE", "LABRADOR"],
    CAT: ["PERSIAN_CAT", "MANX", "WILD_MANX", "LITTLE_MANX"],
    RABBIT: ["WHITE_BUNNY", "BROWN_BUNNY", "PARIS_BUNNY"],
  };

  const handleSpeciesChange = (e) => {
    const species = e.target.value.toUpperCase();
    setSelectedSpecies(species);
    setFormData({ ...formData, species, breed: Breed[species][0] });
  };

  const handleGenderChange = (e) => {
    const gender = e.target.value;
    setFormData({ ...formData, gender });
  };

  const handleBreedChange = (e) => {
    const breed = e.target.value;
    setSelectedBreed(breed);
    setFormData({ ...formData, breed });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
  };

  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    setFormData({ ...formData, description });
  };

  const handlePhotoUrlChange = (e) => {
    const photoUrl = e.target.value;
    setFormData({ ...formData, photoUrl });
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setFormData({ ...formData, location });
  };

  const handleCostChange = (e) => {
    const adoptionFee = e.target.value;
    setFormData({ ...formData, adoptionFee });
  };

  const handleDismissSuccess = () => {
    setShowSuccess(false);
  };

  const petsData = [
    {
      category: 'Big Dogs',
      type: 'dog',
      pets: [
        {
          name: 'Husky',
          img: 'https://media.istockphoto.com/id/1489427502/photo/black-and-white-siberian-husky-with-blue-eyes-walks-in-the-snow-in-winter-against-the.webp?b=1&s=170667a&w=0&k=20&c=gHDlLi8oFlmpkXanE1kHPmgZ24dOw5n3L_IF3eiS458='
          ,
        },
        {
          name: 'Golden Retriever',
          img: 'https://images.unsplash.com/photo-1520981988395-08b47cfa6865?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVucmV0cmlldmVyfGVufDB8fDB8fHww'
        },
        {
          name: 'American Bully',
          img: 'https://media.istockphoto.com/id/1184492889/photo/american-bully-pocket.webp?b=1&s=170667a&w=0&k=20&c=1uk-nI9cRu3zp-hJrTW1UYOzj8TPEvrwuXtwIsUM6-g='
        },
      ],
    },
    {
      category: 'Paired Dogs',
      type: 'dog',
      pets: [
        {
          name: 'Yorkie',
          img: 'https://images.unsplash.com/photo-1598826046537-475a302ffcee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9ncyUyMHBhaXJzfGVufDB8fDB8fHww'
        },
        {
          name: 'Labrador Retriever',
          img: 'https://media.istockphoto.com/id/502303041/photo/three-labrador-retriever-dogs-on-the-grass.webp?b=1&s=170667a&w=0&k=20&c=eTSWvMGzHgThFhCMnB_pKo53938RPmehiY2NYBQuFQg='
        },
        {
          name: 'Husky',
          img: 'https://images.unsplash.com/photo-1567361940434-132560a50902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3MlMjBwYWlyc3xlbnwwfHwwfHx8MA%3D%3D'
        },
      ],
    },
    {
      category: 'Paired Cats',
      type: 'cat',
      pets: [
        {
          name: ' Wild Manx',
          img: 'https://plus.unsplash.com/premium_photo-1671976322693-97b3056d69b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          name: 'Little Manx',
          img: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHN8ZW58MHx8MHx8fDA%3D'
        },
        {
          name: 'Manx',
          img: 'https://media.istockphoto.com/id/534138151/photo/cat-and-dog-together.webp?b=1&s=170667a&w=0&k=20&c=SzDH9tba8lwaXr7M08W9NlbOaplfWm7uUQBlXuJgNTQ='
        },
      ],
    },
    {
      category: "Kittens",
      type: 'cat',
      pets: [
        {
          name: 'Cute Manx',
          img: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          name: 'Manx Kittens',
          img: 'https://media.istockphoto.com/id/1070428270/photo/mother-cat-nursing-baby-kittens.webp?b=1&s=170667a&w=0&k=20&c=DzQtp-kak95miDz41X3iWQYJG4GHNodwBwrdAAAlQWg='
        },
        {
          name: 'Persian Kittens',
          img: 'https://media.istockphoto.com/id/927401846/photo/group-persian-kittens-sitting-on-cat-tower.webp?b=1&s=170667a&w=0&k=20&c=Jj7KlTfw9a6QScGlm1wpNNK2pD52ZnGeBCqKjCmoLU8='
        }
      ],
    },
    {
      category: "Rabbits",
      type: 'rabbit',
      pets: [
        {
          name: 'White Bunny',
          img: 'https://images.unsplash.com/photo-1591561582301-7ce6588cc286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          name: 'Brown Bunny',
          img: 'https://images.unsplash.com/photo-1629898569904-669319348211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1bm55fGVufDB8fDB8fHww'
        },
        {
          name: 'Pairs Bunny',
          img: 'https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D'
        }
      ],
    },
  ];

  const filterPets = () => {
    if (selectedCategory === 'All Pets') {
      return petsData;
    }
    return petsData.filter(category => category.type === selectedCategory.toLowerCase());
  };

  const [selectedPet, setSelectedPet] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPet(null);
  };



  return (
    <>

      <br />

      <div id="text-center" style={{
        background: 'teal', width: '54%', height: '70px', alignItems: 'center', justifyContent: 'center', display: 'flex', marginLeft: '320px', border: '1px solid #ccc',
        borderRadius: '8px',
      }}>
        <h1 style={{ textAlign: 'center', fontFamily: "Copperplate", color: 'orange', }}><b> Hello {username} </b></h1>
      </div>

      <div className="text-center mt-4">
        <h3 style={{ fontFamily: "Copperplate" }}>
          Want to add your Pet ?
        </h3>
        <div>
          {isLogin ?
            <Row className="justify-content-center">
              <Col xs={6} md={6}>
                <Form
                  noValidate
                  validated={validated}
                  style={{
                    marginTop: "8px",
                    backgroundColor: "white",
                    padding: '20px', width: '110%',
                    border: '1px solid #ccc',
                    borderRadius: '8px',

                  }}
                  onSubmit={handleSubmit}
                >
                  <Row>
                    <Col xs={6} md={6}>
                      <Form.Group controlId="species">
                        <Form.Select
                          onChange={handleSpeciesChange}
                          required
                        >
                          <option value="">Select Species</option>
                          <option value="DOG">DOG</option>
                          <option value="CAT">CAT</option>
                          <option value="RABBIT">RABBIT</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please select a species.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={6}>
                      <Form.Group controlId="breed">
                        <Form.Select
                          defaultValue=""
                          onChange={handleBreedChange}
                          disabled={!selectedSpecies}
                          required
                        >
                          <option value="" disabled={!selectedSpecies}>
                            Select Breed
                          </option>
                          {selectedSpecies &&
                            Breed[selectedSpecies].map((breed) => (
                              <option key={breed} value={breed}>
                                {breed}
                              </option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please select a breed.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={6} md={6}>
                      <Form.Group controlId="photoUrl">
                        <Form.Control
                          type="text"
                          placeholder="Photo"
                          onChange={handlePhotoUrlChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a photo URL.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={6}>
                      <Form.Group controlId="gender">
                        <Form.Select onChange={handleGenderChange} required>
                          <option value="">Select Gender</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please select a gender.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={6} md={6}>
                      <Form.Group controlId="location">
                        <Form.Control
                          type="text"
                          placeholder="Location"
                          onChange={handleLocationChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a location.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={6}>
                      <Form.Group controlId="adoptionFee">
                        <Form.Control
                          type="text"
                          placeholder="Cost"
                          onChange={handleCostChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide the adoption fee.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Form.Group controlId="email">
                        <Form.Control
                          type="email"
                          placeholder="User Email"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Form.Group controlId="description">
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Description..."
                          onChange={handleDescriptionChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a description.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row className="justify-content-center">
                    <Col xs={12} md={12} className="text-center">
                      <Button variant="primary" type="submit" style={{ backgroundColor: buttonColor }}>
                        {showSuccess ? "Added Successfully!" : "Add your Pet"}
                      </Button>
                      {showSuccess && (
                        <Alert variant="success" onClose={handleDismissSuccess} dismissible
                          style={{ marginTop: "20px" }}>
                          <Alert.Heading>Added Successfully!</Alert.Heading>
                          <p>Your pet has been successfully added.</p>
                        </Alert>
                      )}
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            : null}
        </div>
        <br /> <br />
        <h3 style={{ fontFamily: 'Copperplate' }}><b>Popular Pet Searches</b></h3>
        <p style={{ fontFamily: 'Copperplate' }}><small>Whilst you can use our filters to search for specific pets, we thought you'd like to try these popular pet searches!</small></p>
        <br />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary" onClick={() => setSelectedCategory('All Pets')}>ALL</button>
          <button type="button" className="btn btn-secondary" onClick={() => setSelectedCategory('Dog')}>DOGS</button>
          <button type="button" className="btn btn-secondary" onClick={() => setSelectedCategory('Cat')}>CATS</button>
          <button type="button" className="btn btn-secondary" onClick={() => setSelectedCategory('Rabbit')}>RABBITS</button>
        </div>

        <br />

        {filterPets().map((categoryData, index) => (
          <div key={index}>
            <div className="text-center">
              <h3 style={{ fontFamily: 'Copperplate' }}><b>{categoryData.category}</b></h3>
            </div>
            <div className="row justify-content-around">
              {categoryData.pets.map((pet, idx) => (
                <div key={idx} className="col-md-4">
                  <div className="list-card-1 mt-1" style={{ backgroundColor: 'white', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', border: '4px solid gray', marginLeft: '50px' }}>
                    <div className="p-2 text-center">
                      {/* don't want zoom add className ='list-card' */}
                      <div className="card" onClick={() => handleCardClick(pet)}>
                        <img src={pet.img} alt={pet.name} className="img-fluid rounded" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <h5 className="card-title">{pet.name}</h5>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLike(pet);
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: likedPets.includes(pet) ? 'red' : 'grey',
                              cursor: 'pointer',
                            }}
                          >
                            <FavoriteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        ))}

        {showModal && selectedPet && (
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Pet Name : {selectedPet.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedPet.img} alt={selectedPet.name} className="img-fluid" style={{ maxWidth: '60%', maxHeight: '120px' }} />
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Enter username" defaultValue={username} style={{ maxWidth: '90%', border: "2px solid black" }} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" defaultValue={email} style={{ maxWidth: '90%', border: "2px solid black" }} />
                </Form.Group>
              </Form>
              {/* <p>Price: {selectedPet.price}</p>
              <div className="d-flex align-items-center">
                <button onClick={handleDecreaseQuantity}>-</button>
                <span className="mx-2">{quantity}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
              </div> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              {isLogin ?
                <Link className='btn custom-button' style={{ backgroundColor: 'blue', color: "white", fontFamily: 'Copperplate' }} to='/application'>
                  Submit Application
                </Link>
                : null}
            </Modal.Footer>
          </Modal>
        )}
        <br />
        <div>
          <h3>Liked Our Pets?</h3>
          <p>Want to adopt your cute friend?</p>
          <Button variant="primary" href="/application">Click Here</Button>
        </div>
        <br />
        <Footer />
      </div>
    </>
  );
}

export default ListPets;
