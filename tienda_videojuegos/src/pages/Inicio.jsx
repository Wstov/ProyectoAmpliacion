import imagen_1 from '../assets/7776101.webp'
import imagen_2 from '../assets/1373100.webp'
import imagen_3 from '../assets/3945673.webp'

import card_1 from '../assets/doom.webp'
import card_2 from '../assets/arthur.webp'
import card_3 from '../assets/codw.webp'
import card_4 from '../assets/grand_theft_auto_v.webp'
import card_5 from '../assets/mario.webp'
import card_6 from '../assets/zelda.webp'
import card_7 from '../assets/of_elden_ring.webp'
import card_8 from '../assets/gow.webp'
import card_9 from '../assets/big_boss.webp'


function Inicio() {
    return (
        <main className='bg-secondary bg-gradient bg-opacity-25'>
            <section>
                <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={imagen_1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Listo para tener los mejores juegos?</h5>
                                <p>Acá podrás encontrar todos los juegos que buscas al mejor precio del mercado.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={imagen_2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Artículos y consolas</h5>
                                <p>Buscas periféricos o consolas?</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={imagen_3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block text-dark">
                                <h5>Juegos Retro</h5>
                                <p>Ten los juegos retro que jamás dejan de divertimos.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>


            <section className='mt-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto" style={{ maxWidth: "1200px" }}>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src={card_1} className="card-img-top" alt="Doom" />
                            <div className="card-body">
                                <h5 className="card-title">Doom</h5>
                                <p className="card-text">$30</p>
                                <a href="#" className="btn btn-dark">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src={card_2} className="card-img-top" alt="Red Dead Redemption II" />
                            <div className="card-body">
                                <h5 className="card-title">Red Dead Redemption II</h5>
                                <p className="card-text">$37</p>
                                <a href="#" className="btn btn-dark">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src={card_3} className="card-img-top" alt="Call of Duty - Warzone" />
                            <div className="card-body">
                                <h5 className="card-title">Call of Duty - Warzone</h5>
                                <p className="card-text">$35</p>
                                <a href="#" className="btn btn-dark">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src={card_4} className="card-img-top" alt="Grand Theft Auto V" />
                            <div className="card-body">
                                <h5 className="card-title">Grand Theft Auto V</h5>
                                <p className="card-text">$35</p>
                                <a href="#" className="btn btn-dark">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src={card_5} className="card-img-top" alt="Super Mario Bros" />
                            <div className="card-body">
                                <h5 className="card-title">Doom</h5>
                                <p className="card-text">$15</p>
                                <a href="#" className="btn btn-dark">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src={card_6} className="card-img-top" alt="Zelda" />
                            <div className="card-body">
                                <h5 className="card-title">Zelda</h5>
                                <p className="card-text">$15</p>
                                <a href="#" className="btn btn-dark">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src={card_7} className="card-img-top" alt="Elden Ring" />
                            <div className="card-body">
                                <h5 className="card-title">Elden Ring</h5>
                                <p className="card-text">$40</p>
                                <a href="#" className="btn btn-dark">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src={card_8} className="card-img-top" alt="God of War Ragnarok" />
                            <div className="card-body">
                                <h5 className="card-title">God of War - Ragnarok</h5>
                                <p className="card-text">$35</p>
                                <a href="#" className="btn btn-dark">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src={card_9} className="card-img-top" alt="Metal Gear Solid" />
                            <div className="card-body">
                                <h5 className="card-title">Metal Gear Solid</h5>
                                <p className="card-text">$25</p>
                                <a href="#" className="btn btn-dark">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className="container-fluid g-0">
                    <div className="row g-0">
                        <div className="col-md-12">
                            <div className="lc-block overflow-hidden">
                                <div style={{ maxHeight: "40vh" }} className="ratio ratio-1x1" lc-helper="gmap-embed">
                                    <iframe
                                        src="https://maps.google.com/maps?q=1%20Hacker%20Way%2C%20Menlo%20Park%2C%20CA%2094025%2C%20United%20states&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
                                        title="Google Maps Embed"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row min-vh-50 align-items-center justify-content-center">
                        <div className="col-lg-9 col-xl-8 text-center bg-dark text-white p-5">
                            <div className="lc-block mb-4">
                                <div editable="rich">
                                    <h2 className="display-3 fw-bolder">Encuentranos</h2>
                                    <p>Estamos ubicados en Hacker Way, Menlo Park en Palo Alto California  <br />&nbsp;eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</p>

                                </div>
                            </div>
                            <div className="lc-block mb-5">
                                <a className="btn btn-lg btn-light" href="https://goo.gl/maps/zy3NkDKV3x4iyUkL9" role="button">Contactanos</a>
                            </div>
                            <div className="lc-block border-top col-md-6 offset-md-3">
                                <div editable="rich">
                                    <h2 className="fw-bolder"><br /></h2>
                                </div>
                            </div>
                            <div className="lc-block mb-4">
                                <div editable="rich">
                                    <h2 className="fw-bolder">Horario de Atención</h2>
                                </div>
                            </div>
                            <div className="lc-block">
                                <div editable="rich">
                                    <p>Lunes a Viernes: 07:00 – 19:45</p>
                                    <p>Sabado y Domigo: 11:00 – 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Inicio
