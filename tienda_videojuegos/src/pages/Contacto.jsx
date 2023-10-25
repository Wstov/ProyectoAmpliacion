import imagenFormulario from '../assets/9100862.webp'
import { Form } from 'react-router-dom';
import { useState } from 'react';



export async function action({ request }) {
  try {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    console.log(datos);

    const response = await fetch('http://localhost:3000/auth/registoContacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),

    });

    if (response.ok) {
      console.log('Solicitud POST exitosa');
      // Realiza cualquier acción adicional necesaria

    } else {
      console.error('Error en la solicitud POST');
      // Maneja el error de la solicitud
    }
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
    // Maneja errores de red o del lado del servidor
  }

  return null;
}




function Contacto() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const limpiarCampos = () => {
    // Llama a las funciones de actualización del estado para restablecer los campos
    setNombre('');
    setApellido('');
    setEdad('');
    setTelefono('');
    setEmail('');
    setMensaje('');
  };



  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center bg-light pt-5" style={{ minHeight: "100vh" }}>
        <div className="card shadow p-5 mb-5 bg-white rounded" style={{ width: '80%', border: 'none' }}>
          <h3 className="card-title text-center mb-5 font-weight-bold fs-1">Envianos un mensaje llenando los siguientes datos:</h3>

          <Form className="row"
            method='POST'
            onSubmit={limpiarCampos}

          >
            <div className="col-md-4 d-flex align-items-start justify-content-center mb-4">
              <img src={imagenFormulario} alt="Descripción de la imagen" className="img-fluid" style={{ maxWidth: '90%', maxHeight: '90%' }} />
            </div>
            <div className="col-md-8">

              <div className="form-group">
                <label htmlFor="inputNombre" className="font-weight-bold">Nombre</label>
                <input
                  placeholder="Nombre"
                  type="text"
                  className="form-control mb-3"
                  id="inputNombre"
                  name="nombre"
                  value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />

              </div>

              <div className="form-group">
                <label htmlFor="inputApellido" className="font-weight-bold">Apellido</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="inputApellido"
                  placeholder="Apellido"
                  name="apellido"
                  value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputEdad" className="font-weight-bold">Edad</label>
                <input
                  type="number"
                  className="form-control mb-3"
                  id="inputEdad"
                  placeholder="Edad"
                  name="edad"
                  value={edad}
                onChange={(e) => setEdad(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputTelefono" className="font-weight-bold">Teléfono</label>
                <input
                  type="tel"
                  className="form-control mb-3"
                  id="inputTelefono"
                  placeholder="Teléfono"
                  name="telefono"
                  value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputEmail" className="font-weight-bold">E-mail</label>
                <input
                  type="email"
                  className="form-control mb-3"
                  id="inputEmail"
                  placeholder="E-mail"
                  name="email"
                  value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="inputMensaje" className="font-weight-bold">Mensaje</label>
                <textarea
                  className="form-control"
                  id="inputMensaje"
                  rows=""
                  placeholder="Escribe tu mensaje aquí..."
                  name="mensaje"
                  value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-3">Enviar</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Contacto
