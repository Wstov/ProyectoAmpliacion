import React, { useState } from 'react';

function Carrito() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="two columns u-pull-right">
            <ul>
                <li >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="lightgray"
                        className="bi bi-cart2 "
                        viewBox="0 0 16 16"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ cursor: 'pointer' }}
                    >
                        {/* <path d="..." /> */}
                    </svg>

                    {isOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <table id="lista-carrito" className="u-full-width">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <a href="#" id="vaciar-carrito" className="button u-full-width">Vaciar Carrito</a>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Carrito;


