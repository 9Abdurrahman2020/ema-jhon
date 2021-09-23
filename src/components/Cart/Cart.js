import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    const price = cart.reduce((initial,product)=>(initial+product.price),0);
    const tex = price * .1;
    const total = price + tex;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <h4>Items ordered: {cart.length}</h4>
            <p>Price: {price.toFixed(2)}</p>
            <p>Tax: {tex.toFixed(2)}</p>
            <h5>Total: {total.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;