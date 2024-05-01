import React from 'react';
import '../styles/modal.css'

function Item({ open, SHOW, item }) {
    console.log(item)
    return (
        <div className={`popup ${open ? 'open' : ''}`}>
            <div className="popup-content">
                <span className="close" onClick={SHOW}>&times;</span>
                <div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <p>{item.productName}</p><br />
                        </div>
                        <p>Price: ${item.price}</p><br />
                        <p>Rating: {item.rating}</p><br />
                        <p>Discount: {item.discount}</p><br />
                        <p>Availability: {item.availability == 'yes' ? 'AVAILABLE ✔️' : 'out of stock 😔'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
