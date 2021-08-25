import React, { Component } from 'react';

class Cart extends Component {
	render() {
		const {order,totalPrice} = this.props;
		const isOrder = Object.values(order).some((item)=>item!==0);

		return (
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title text-danger" id="exampleModalLabel">Your Burger</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<p>Your burger takes:</p>
							
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Cart;