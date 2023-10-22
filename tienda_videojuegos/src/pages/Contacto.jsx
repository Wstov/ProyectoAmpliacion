import imagenFormulario from '../assets/9100862.webp'

function Contacto() {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center bg-light pt-5" style={{ minHeight: "100vh" }}>
        <div className="card shadow p-5 mb-5 bg-white rounded" style={{ width: '80%', border: 'none' }}>
          <h3 className="card-title text-center mb-5 font-weight-bold fs-1">Envianos un mensaje llenando los siguientes datos:</h3>
          <form className="row">
            <div className="col-md-4 d-flex align-items-start justify-content-center mb-4">
              <img src={imagenFormulario} alt="Descripción de la imagen" className="img-fluid" style={{ maxWidth: '90%', maxHeight: '90%' }} />
            </div>
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="inputApellido" className="font-weight-bold">Apellido</label>
                <input type="text" className="form-control mb-3" id="inputApellido" placeholder="Apellido" />
              </div>

              <div className="form-group">
                <label htmlFor="inputNombre" className="font-weight-bold">Nombre</label>
                <input type="text" className="form-control mb-3" id="inputNombre" placeholder="Nombre" />
              </div>

              <div className="form-group">
                <label htmlFor="inputEdad" className="font-weight-bold">Edad</label>
                <input type="number" className="form-control mb-3" id="inputEdad" placeholder="Edad" />
              </div>

              <div className="form-group">
                <label htmlFor="inputTelefono" className="font-weight-bold">Teléfono</label>
                <input type="tel" className="form-control mb-3" id="inputTelefono" placeholder="Teléfono" />
              </div>

              <div className="form-group">
                <label htmlFor="inputEmail" className="font-weight-bold">E-mail</label>
                <input type="email" className="form-control mb-3" id="inputEmail" placeholder="E-mail" />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="inputMensaje" className="font-weight-bold">Mensaje</label>
                <textarea className="form-control" id="inputMensaje" rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-3">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contacto
