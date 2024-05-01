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
                        {item.availability=='yes'?
                        <>
                            <button onClick={()=>alert(`Bought ${item.productName} for $ ${item.price}`)}>BUY</button>
                        </>
                        :
                        <>
                            <p style={{opacity: 0.5, background:'red', width: '10%', marginLeft: 'auto', marginRight: 'auto', alignContent: 'center', padding: 10 }} onClick={()=>alert(`${item.productName} is out of Stock.`)}>OUT OF STOCK</p>
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
