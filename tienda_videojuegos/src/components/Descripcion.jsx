import React from 'react';
import { Link } from 'react-router-dom';

function Descripcion() {
    return (
        <div className="container ">
            <div className="row justify-content-center align-items-center" style={{ marginTop: '10vh' }}>
                <div className="col-lg-10 col-md-12 col-sm-12">
                    <div className="bg-light p-4 rounded shadow text-center">
                        <h1>Descripción del Proyecto</h1>
                        <p className="lh-4 fs-4">
                            El proyecto "GAME STORE" utiliza una variedad de tecnologías y dependencias para su desarrollo. A continuación, se proporciona una descripción de las principales tecnologías y bibliotecas utilizadas en el proyecto:

                            <br />1. **Vite**: Vite es el motor de compilación y desarrollo que se utiliza en el proyecto. Es una herramienta de compilación rápida y eficiente para aplicaciones web modernas que utilizan JavaScript y TypeScript.
                            <br />2. **React y React DOM**: React es una biblioteca de JavaScript para la construcción de interfaces de usuario. React DOM es una biblioteca que permite renderizar componentes React en el navegador web.
                            <br />3. **React Router DOM**: React Router DOM es una biblioteca que se utiliza para el enrutamiento y la navegación en aplicaciones React. Permite gestionar las rutas y las transiciones entre páginas en la aplicación.
                            <br />4. **Bootstrap**: Bootstrap es un popular marco de diseño de código abierto que se utiliza para diseñar la interfaz de usuario del proyecto. Proporciona componentes y estilos predefinidos que facilitan el diseño de la aplicación.
                            <br />5. **Express**: Express es un marco de aplicación web de Node.js que se utiliza para crear el backend del proyecto. Facilita la creación de rutas, manejo de solicitudes HTTP y otras funcionalidades del servidor.
                            <br />6. **Sequelize**: Sequelize es un ORM -Object-Relational Mapping- para bases de datos relacionales. Se utiliza para interactuar con la base de datos MySQL y realizar operaciones como la creación, consulta y modificación de datos.
                            <br />7. **MySQL2**: MySQL2 es un controlador de MySQL para Node.js. Se utiliza para conectarse a la base de datos MySQL y ejecutar consultas.
                            <br />8. **Cors**: Cors es un middleware de Express que permite el intercambio de recursos entre diferentes orígenes. Facilita la gestión de solicitudes de recursos de origen cruzado (CORS).
                            <br />9. **Dotenv**: Dotenv es una biblioteca que permite cargar variables de entorno desde un archivo `.env` para configurar la aplicación.
                            <br />10. **Morgan**: Morgan es un middleware de Express que se utiliza para registrar solicitudes HTTP y respuestas en la consola. Ayuda en la depuración y seguimiento de las solicitudes entrantes al servidor.
                            <br /> 11. **Eslint**: Eslint es una herramienta de linting que se utiliza para mantener un código limpio y consistente en el proyecto. Ayuda a identificar y corregir problemas potenciales en el código.
                            <br />12. **Nodemon**: Nodemon es una herramienta que monitorea cambios en los archivos del proyecto y reinicia automáticamente el servidor cuando se detectan cambios. Esto es útil durante el desarrollo.
                            <br />El proyecto utiliza estas tecnologías para crear una tienda de videojuegos con un frontend desarrollado en React y React Router DOM, y un backend construido con Express y Sequelize para interactuar con una base de datos MySQL. Se utilizan las dependencias adicionales para facilitar el enrutamiento, el diseño de la interfaz de usuario, la gestión de solicitudes HTTP y la depuración del código.
                        </p>
                    </div>
                    <div className="text-center mt-3 mb-5">
                        <Link to="/" className="btn btn-primary">Ir al sitio web</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Descripcion;
