import { Link } from 'react-router-dom'
import logotipo from '../assets/logotipo.png'




function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient py-2 pb-3 ">
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

            <div className="ms-lg-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="lightgray" className="bi bi-cart2 opacity-75" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
