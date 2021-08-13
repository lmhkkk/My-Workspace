import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

    render() {
        const {products, onSelectedProduct, addToCart} = this.props;
        return (
            <div>
                <h2 className="text-danger">Category</h2>
                <div className="row">
                {
                    products.map((productItem, index)=>{
                        return <div className="col-4">
                            <ProductItem addToCart ={addToCart} onSelectedProduct ={onSelectedProduct} product ={productItem} key={index} />
                        </div>
                    })
                }
            </div>
            </div>
        );
    }
}

export default ProductList;