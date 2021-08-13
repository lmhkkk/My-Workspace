/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {name, img, price, id} = this.props.product;
        const {onSelectedProduct, addToCart} = this.props;
        return (
            <div>
                <div className="card p-3" style={{ width: '18rem' }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title mb-2">{name}</h5>
                        <p>{price}</p>
                        <a href="#" onClick ={()=>onSelectedProduct(id)} className="btn btn-success me-4">
                            Details
                        </a>
                        <a href="#" onClick ={()=>addToCart(this.props.product)} className="btn btn-danger">
                            Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;