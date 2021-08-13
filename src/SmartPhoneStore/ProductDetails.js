/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

class ProductDetails extends Component {

    render() {
        const {name, img, info, ram, rom} = this.props.productDetail;
        const {screen, os, frontCamera, backCamera} = info;
        return (
            <div className="mt-5">
                <h1 className="text-warning">Details</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="text-center m-2 text-info">{name}</h3>
                        <img src={img} className="col-md-8" />
                    </div>
                    <div className="col-md-6" >
                        <div className="table fw-bold">
                            <thead>
                                <tr>
                                    <td colSpan="2">
                                        <h3 className="text-info">Thông số kỹ thuật</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{screen}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{os}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{frontCamera}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{backCamera}</td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td>Rom</td>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;