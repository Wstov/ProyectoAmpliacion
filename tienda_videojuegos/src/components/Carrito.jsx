import React, { useState } from 'react';

function Carrito() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="two columns u-pull-right">

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

        </div>
    );
}

export default Carrito;


