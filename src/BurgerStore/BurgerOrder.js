/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Cart from './Cart';


class BurgerOrder extends Component {
	render() {
		const { topping, onHandleChangeTopping, order, onHandleReset } = this.props;
		let totalPrice = 0;
		for (let orderItem in order) {
			for (let toppingItem of topping) {
				if (orderItem === toppingItem.key) {
					totalPrice += order[orderItem] * toppingItem.price;
				}
			}
		}
		return (
			<div>
				<table class="table table-l table-borderless caption-top ">
					<caption className="text-center border-bottom border-5 text-dark fw-bold fs-4">Custom your Burger</caption>
					<thead className="text-center align-middle">
						<tr>
							<th scope="col">TOPPING</th>
							<th scope="col">OPTION</th>
							<th scope="col">UNIT PRICE</th>
							<th scope="col">PRICE</th>
						</tr>
					</thead>
					<tbody>
						{topping.map((item) => {
							const { name, price, key } = item;
							return (
								<tr className="align-middle">
									<th scope="row">{name}</th>
									<td >
										<div className="d-grid gap-2 d-md-block ">
											<button onClick={() => onHandleChangeTopping(key, -1)} className="btn btn-danger " type="button"
												disabled={order[key] < 1 ? true : false}>Less</button>
											<span className="mx-2 bg-dark text-white p-2 align-middle">{order[key]}</span>
											<button onClick={() => onHandleChangeTopping(key, 1)} className="btn btn-primary" type="button">More</button>
										</div>
									</td>

									<td className="text-center">${price}</td>
									<td className="text-center">{price * order[key]}</td>
								</tr>
							)
						})}

						<tr className="border-top align-middle">
							<th scope="row">Total cost</th>
							<td className="text-end px-4 fw-bold align-middle" colSpan="3">{totalPrice}$</td>
						</tr>
					</tbody>
				</table>
				<div className="d-grid gap-2 d-md-block">
					<div className="d-flex justify-content-start">
						<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
							ORDER NOW
						</button>
						<Cart order={order} totalPrice={totalPrice}/>
						<button className="btn btn-secondary mx-3" type="button" onClick={() => onHandleReset()}>RESET</button>
					</div>
				</div>
			</div>
		);
	}
}

export default BurgerOrder;