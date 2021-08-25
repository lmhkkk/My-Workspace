/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ChoosenProducts from './ChoosenProducts';

class Modal extends Component {
    render() {
        const { choosenProducts } = this.props;
        const count = this.props.quantity;
        console.log(count);
        return (
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                width="100px"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Shopping Cart
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <ChoosenProducts  choosenProducts={choosenProducts} quantity={count}/>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Modal;