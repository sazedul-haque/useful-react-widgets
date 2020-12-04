import React from 'react';
import productImage from '../assets/product.png'; 

const Product = () => {
    return (
        <div className="product">
            <div className="thumb">
                <img src={productImage} alt="product" />
            </div>
            <div className="detail">
                <h3>Summer Sale</h3>
                <p>25% Off Now through sunday for all in-store purchases.</p>
                <a href="#" className="btn">Shop Now</a>
            </div>
        </div>
    )
}
export default Product;