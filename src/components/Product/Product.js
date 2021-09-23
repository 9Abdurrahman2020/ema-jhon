import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
            <h2>{name}</h2>
            <p><small>by: {seller}</small></p>
            <p>Price: ${price}</p>
            <p><small>only {stock} left in stock-order soon</small></p>
            <button onClick={()=>props.cartHandler(props.product)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;