import { Link } from 'react-router-dom'
import logotipo from '../assets/logotipo.png'




function Header(props) {
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

            {/* CARRITO */}
            <div className="ms-lg-auto">

              {props.carritoComponent}
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
