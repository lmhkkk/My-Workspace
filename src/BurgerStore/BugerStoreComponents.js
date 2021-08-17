import React, { Component } from 'react';
import BurgerBuilder from './BurgerBuilder';
import BurgerOrder from './BurgerOrder';

class BugerStoreComponents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topping: [
				{
					name: "Salad",
					price: 10,
					key: "salad"
				},
				{
					name: "Cheese",
					price: 20,
					key: "cheese"
				},
				{
					name: "Meat",
					img: <div className="meat"></div>,
					price: 25,
					key: "meat"
				},
				{
					name: "Bacon",
					img: <div className="bacon"></div>,
					price: 28,
					key: "bacon"
				},

			],
			order: { salad: 0, cheese: 0, meat: 0, bacon: 0 },
		};
	}

	onHandleChangeTopping = (key, value) => {
		const order = this.state.order;
		for(let item in order){
			if(item===key){
				order[item] += value; 
			}
		}
		this.setState({
			order:order,
		})
	}
	onHandleReset=()=>{
		this.setState({
			order: { salad: 0, cheese: 0, meat: 0, bacon: 0 },
		})
	}
	render() {
		const { topping, order } = this.state;
		return (
			<div>
				<h1 className="text-center text-danger my-3">LMH Burger Store</h1>
				<div className="mt-5 d-flex justify-content-center align-items-stretch">
					<BurgerBuilder  order={order}/>
					<div className="bg-warning px-3 align-middle">
						<BurgerOrder topping={topping} order={order} onHandleReset = {this.onHandleReset} onHandleChangeTopping={this.onHandleChangeTopping} />

					</div>
				</div>
			</div>
		);
	}
}

export default BugerStoreComponents;