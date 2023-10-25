import React from 'react';

const CartItem = ({ nombre, precio, imagen, cantidad }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagen} alt={nombre} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">Precio: ${precio}</p>
                        <p className="card-text">Cantidad: {cantidad}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
