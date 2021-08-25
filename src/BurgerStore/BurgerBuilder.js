import React, { Component } from 'react';

import IngredientItem from './IngredientItem';

class BurgerBuilder extends Component {
	render() {
		const { order } = this.props;
		const burgerRender = [];
		const isOrder = Object.values(order).some((item)=>item !== 0);
		for (const orderItem in order) {
			const value = order[orderItem];
			for (let i = 0; i < value; i++) {
				const ingredient = <IngredientItem type={orderItem} key={orderItem+i} />;
				burgerRender.push(ingredient);
			}
		}
		return (
			<div>
				<div className="box bg-light" >
					<h2 className="text-center">Your taste Burger</h2>
					{/* <!-- Phần bánh burger phía trên --> */}
					<div class="bread-top">
						<div class="seeds"></div>
						<div class="seeds2"></div>
					</div>
						{isOrder?burgerRender:
							<p className="text-center">Let's choose your custom Burger</p>
						}
						
					{/* <!-- Phần bánh burger phía dươi --> */}
					<div class="bread-bottom"></div>
				</div>
			</div>
		);
	}
}

export default BurgerBuilder;