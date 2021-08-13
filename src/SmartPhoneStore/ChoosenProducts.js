/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

class ChoosenProducts extends Component {

    render() {
        const { name, id, img, price } = this.props.choosenProducts;
        const count = this.props.quantity;
        return (
            <div>
                {/* render sản phẩm */}
                <div className="table">
                    <thead>
                        <tr className="fw-bold text-center">
                            <td>
                                <p>Product_Code</p>
                            </td>
                            <td>
                                <p>Image</p>
                            </td>
                            <td>
                                <p>Name</p>
                            </td>
                            <td>
                                <p>Quantity</p>
                            </td>
                            <td>
                                <p>Price</p>
                            </td>
                            <td colSpan="2">
                                <p>Total</p>
                            </td>

                        </tr>
                        {count !== 0 ?
                            <tr className="text-center">

                                <td >
                                    <p>{id}</p>
                                </td>
                                <td>
                                    <img src={img} className="img-fluid" />
                                </td>
                                <td>
                                    <p>{name}</p>
                                </td>
                                <td>
                                    <div className="btn-display">
                                        <button className="btn btn-primary" type="button">+</button>
                                        <p>{count}</p>
                                        <button className="btn btn-primary" type="button">-</button>
                                    </div>
                                </td>
                                <td>
                                    <p>${price}</p>
                                </td>
                                <td colSpan="2">
                                    <p>{price * count}</p>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">Delete</button>
                                </td>
                            </tr> :
                            <tr className="d-block">
                            </tr>}


                    </thead>
                </div>
            </div>
        );
    }
}

export default ChoosenProducts;