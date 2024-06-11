import React from 'react'
import { Link } from 'react-router-dom'
import '../HomePage/Home.css';

const Cards = () => {
    return (
        // {/* CARD-1 */}
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <Link to="/aboutus" style={{ textDecoration: 'none' }}>
                        <div className="card">
                            <img src="https://www.shutterstock.com/image-vector/icon-illustration-concept-family-care-600nw-1077028331.jpg" className="rounded-top img-fluid mx-auto d-block mt-2" alt="kind-cards-img" style={{ height: '150px', width: 'auto' }} />
                            <div className="card-body">
                                <p className="card-text text-center mb-1" style={{ fontFamily: 'Copperplate' }}><h4>Kind  Everyone </h4></p>
                                <p className="card-text text-center" style={{ fontFamily: 'Copperplate' }}><small>We believe that...</small></p>
                                <ul>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>Every pet deserves to be safe, loved & respect.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who are grate candidates for adoption shouldn't wbe put off by complicated process.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who need  to  adopt the pets should be empowered to do so without being judged</small></li>

                                </ul>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* CARD-2 */}
                <div className="col-md-4">
                    <Link to="/aboutus" style={{ textDecoration: 'none' }}>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqKW_fomC27szSDf43ncEI6DmPhr8Rna6AFK9lmyuqpZcehijT3FMDbQaKDM62ZlL1Ko&usqp=CAU" className="rounded-top img-fluid mx-auto d-block mt-2" alt="pet-cards-img" style={{ height: '150px', width: 'auto' }} />
                            <div className="card-body">
                                <p className="card-text text-center mb-1" style={{ fontFamily: 'Copperplate' }}><h4>Kind  Everyone </h4></p>
                                <p className="card-text text-center" style={{ fontFamily: 'Copperplate' }}><small>We believe that...</small></p>
                                <ul>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>Every pet deserves to be safe, loved & respect.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who are grate candidates for adoption shouldn't wbe put off by complicated process.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who need  to  adopt the pets should be empowered to do so without being judged</small></li>

                                </ul>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* CARD-3 */}
                <div className="col-md-4">
                    <Link to="/aboutus" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ transition: 'transform 0.3s' }}>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/007/636/859/small/community-logo-design-free-vector.jpg" className="rounded-top img-fluid mx-auto d-block mt-2" alt="community-cards-img" style={{ height: '150px', width: 'auto' }} />
                            <div className="card-body">
                                <p className="card-text text-center mb-1" style={{ fontFamily: 'Copperplate' }}><h4>Advocate Adoption </h4></p>
                                <p className="card-text text-center" style={{ fontFamily: 'Copperplate' }}><small>We believe that...</small></p>
                                <ul>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>Every pet deserves to be safe, loved & respect.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who are grate candidates for adoption shouldn't wbe put off by complicated process.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who need  to  adopt the pets should be empowered to do so without being judged</small></li>

                                </ul>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Cards