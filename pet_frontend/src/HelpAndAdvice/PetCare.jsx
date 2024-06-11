import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
function PetCare() {
  return (
    <>
      {/* <NavBar/> */}
      <Container>
        <br /> <br />
        <Row>
          <Col xs={8} md={4}>
            <div style={{ position: 'relative', overflow: '-moz-hidden-unscrollable' }}>
              <img src="https://fetchpetcare.com/wp-content/uploads/2016/11/dreamstime_xxl_87694876.jpg"
                alt="Your abc" style={{ width: '350%', height: '80%', }} />
              <div style={{ position: 'absolute', top: '35%', left: '20%', transform: 'translate(-50%, -50%)' }}>
                <h1 style={{ margin: '20%', marginTop: '2%', fontSize: '70px', fontFamily: 'Garamond', whiteSpace: 'nowrap', color: 'black' }}></h1> {/*<b>Pet Welfare</b> */}
              </div>
            </div>
          </Col>
        </Row>
        <br /> <br /> <br />
        <div className="container" style={{ textAlign: 'center', fontFamily: 'Copperplate' }}>
          <h1 >Pet Welfare Guides</h1>
          <p>What you need to know about providing the right basic care for your dog, cat or rabbit</p>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-4" >
            <div className="card" st>
              <br />
              <img src="https://thumbs.dreamstime.com/b/dog-logo-icon-circle-design-103154130.jpg" className="rounded-top img-fluid mx-auto d-block mt-2" alt="kind-cards-img" style={{ height: '150px', width: 'auto' }} />
              <div className="card-body" style={{ fontFamily: 'Copperplate', padding: '65px' }}>
                <p className="card-text text-center mb-1"><h4>Dog Welfare</h4></p>
                <p className="card-text text-center">Here, you'll find out how to prepare for your new dog. Find out how to provide the right diet, exercise, companionship and veterinary care for your dog.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" >
            <div className="card" st>
              <br />
              <img src="https://img.freepik.com/premium-vector/elegant-black-white-vector-cat-logo-isolated-white-background_567294-5704.jpg" className="rounded-top img-fluid mx-auto d-block mt-2" alt="kind-cards-img" style={{ height: '150px', width: 'auto' }} />
              <div className="card-body" style={{ fontFamily: 'Copperplate', padding: '65px' }}>
                <p className="card-text text-center mb-1"><h4>Cat Welfare</h4></p>
                <p className="card-text text-center">Here, you'll find out how to prepare for your new dog. Find out how to provide the right diet, exercise, companionship and veterinary care for your cat.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" >
            <div className="card" style={{}}>
              <br />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBmu6zSj86kg6RGGx2gCuBiMtT2C4JVi69zSFIEujkQ&s" className="rounded-top img-fluid mx-auto d-block mt-2" alt="kind-cards-img" style={{ height: '150px', width: 'auto' }} />
              <div className="card-body" style={{ fontFamily: 'Copperplate', padding: '65px' }}>
                <p className="card-text text-center mb-1"><h4>Rabbit Welfare</h4></p>
                <p className="card-text text-center">Here, you'll find out how to prepare for your new dog. Find out how to provide the right diet, exercise, companionship and veterinary care for your rabbit.</p>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
      </Container>
      <Footer />
    </>
  );
}
export default PetCare;