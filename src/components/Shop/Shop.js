import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const [cart, setCart] = useState([]);
    const cartHandler=product=>{
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className="shop">
            <div className="products">
            {
                products.map(product=><Product 
                    product={product}
                    key={product.key}
                    cartHandler={cartHandler}
                    />)
            }
            </div>
            <div className="cart">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;