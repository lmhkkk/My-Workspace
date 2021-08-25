/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

class SmartstoreComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Samsung Galaxy A10",
                    price: "40906000",
                    img: "assets/img/samsung-galaxy.jpg",
                    info: {
                        screen: "AMOLED Full HD 9.0",
                        os: "Android 9.0",
                        frontCamera: "20MP",
                        backCamera: "Chính 48MB, phụ 30MP",
                    },
                    ram: "4 GB",
                    rom: "64 GB",
                },
                {
                    id: 2,
                    name: "IPhone12",
                    price: "200306000",
                    img: "assets/img/iphone-12.jpg",
                    info: {
                        screen: "Full HD 12.0",
                        os: "IOS 14",
                        frontCamera: "20MP",
                        backCamera: "Chính 100MB, phụ 30MP",
                    },
                    ram: "16 GB",
                    rom: "32 GB",
                },
                {
                    id: 3,
                    name: "Xiaomi Note 10",
                    price: "10005000",
                    img: "assets/img/xiaomi-redmi-note-10-5g.jpg",
                    info: {
                        screen: "OLED 10.0",
                        os: "Android 8.0",
                        frontCamera: "69MP",
                        backCamera: "Chính 96MB, phụ 30MP",
                    },
                    ram: "10 GB",
                    rom: "64 GB",
                },
            ],
            selectedProduct:
            {
                id: 1,
                name: "Samsung Galaxy A10",
                price: "40906000",
                img: "assets/img/samsung-galaxy.jpg",
                info: {
                    screen: "AMOLED Full HD 9.0",
                    os: "Android 9.0",
                    frontCamera: "20MP",
                    backCamera: "Chính 48MB, phụ 30MP",
                },
                ram: "4 GB",
                rom: "64 GB",
            },
            cart: [],
        }
    }
    onSelectedProduct = (id) => {
        const products = this.state.products;
        const idx = products.findIndex((product) => product.id === id);
        if (idx !== -1) {
            this.setState({
                selectedProduct: products[idx],
            })
        }
    }
    addToCart = (product) => {
        const idxItemInCart = this.state.cart.findIndex((item) => item.id === product.id);

        //Nếu sp chưa tồn tại
        //Cập nhật amount =1 => push vào gỉ hàng
        if (idxItemInCart === -1) {
            product.amount = 1;
            this.setState({
                cart: [...this.state.cart, product],
            });
        }
        else {
            const currentCart = this.state.cart;
            currentCart[idxItemInCart].amount += 1;
            this.setState({
                cart: currentCart,
            });
        }
    }
    // Sự kiện tăng số lượng cart item
    // onPlusAmountCartItem = (id) => {
    //     const currentCart = this.state.cart;
    //     const idxItemInCart = currentCart.findIndex((item) => item.id === id);

    //     currentCart[idxItemInCart].amount += 1;
    //     this.setState({
    //         cart: currentCart,
    //     });
    // };

    // Sự kiện tăng số lượng cart item
    // onMinusAmountCartItem = (id) => {
    //     const currentCart = this.state.cart;
    //     const idxItemInCart = currentCart.findIndex((item) => item.id === id);
    //     currentCart[idxItemInCart].amount -= 1;
    //     this.setState({
    //         cart: currentCart,
    //     });
    // };
    //Xử lý tăng giảm cart item
    onHandleAmountCartItemChange=(id,value)=>{
        const currentCart = this.state.cart;
        const idxItemInCart = currentCart.findIndex((item) => item.id === id);
        currentCart[idxItemInCart].amount += value;
        this.setState({
            cart: currentCart,
        });
    }
    //Xóa món hàng
    onDeleteCartitem =(id)=>{
        const currentCart = this.state.cart;
        const newCart = currentCart.filter((item) => item.id !== id);
        this.setState({
            cart: newCart,
        });
    }
    render() {
        const { products, selectedProduct, cart } = this.state;
        let amount = 0;
        for(const cartItem of cart){
            amount += cartItem.amount;
        }
        return (
            <div>
                <div className="container pt-5">
                    <div className="d-flex justify-content-end">
                        <a
                            type="button"
                            className="text-success"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Giỏ hàng ({amount})
                        </a>
                    </div>

                    <h1 className="text-primary text-center">Smart Phone Store</h1>
                    <ProductList products={products} onSelectedProduct={this.onSelectedProduct} addToCart={this.addToCart} />
                    <ProductDetails productDetail={selectedProduct} />
                    <Cart cart={cart}
                        onHandleAmountCartItemChange = {this.onHandleAmountCartItemChange}
                        onDeleteCartitem = {this.onDeleteCartitem} />
                </div>
            </div>
        )
    }
}

export default SmartstoreComponent;