import { Link } from 'react-router-dom'
import logotipo from '../assets/logotipo.png'
// import { useState } from 'react';



function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient py-2 pb-3">
        <div className="container-fluid mx-5">

          <Link to='/' className="navbar-brand">
            <img className="img-fluid" src={logotipo} alt="logotipo" width="150px" height="150px" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_lc" aria-controls="nav_lc" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav_lc">

            <ul className="d-none d-lg-flex navbar-nav mx-auto my-3 my-lg-0 position-absolute top-50 start-50 translate-middle">
              <li className="nav-item me-4"><Link className="nav-link" to="/tiendadevideojuegos/nosotros">Nosotros</Link></li>
              <li className="nav-item me-4"><Link className="nav-link" to="/">Comprar</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/tiendadevideojuegos/contacto">Contacto</Link></li>
            </ul>

            <ul className="navbar-nav my-3 my-lg-0 d-lg-none">
              <li className="nav-item me-4"><Link className="nav-link" to="/tiendadevideojuegos/nosotros">Nosotros</Link></li>
              <li className="nav-item me-4"><Link className="nav-link" to="/">Comprar</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/tiendadevideojuegos/contacto">Contacto</Link></li>
            </ul>


            {/* CARRITO */}
            <div className="ms-lg-auto">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="lightgray"
                className="bi bi-basket2-fill"
                viewBox="0 0 16 16">
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
