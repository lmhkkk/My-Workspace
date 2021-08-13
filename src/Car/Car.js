/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

class Car extends Component {
    constructor(props){
        super(props);
        this.state ={
            selectedCar : "Car/red-car.png"
        };
    }
    changeCarColor = (color) =>{
        this.setState({
            selectedCar : color,
        });
    }
    render() {
        return (
            <div className = "car">
                <div className = "car__left">
                    <h2>Please choose your car's color</h2>
                    <img src={this.state.selectedCar} />
                </div>
                <div>
                    <button className = "button red" onClick={()=>this.changeCarColor("Car/red-car.png")}>Red</button>   
                    <button className = "button Black" onClick={()=>this.changeCarColor("Car/black-car.png")}>Black</button>  
                    <button className = "button White" onClick={()=>this.changeCarColor("Car/white-car.png")}>White</button>                     
                </div>
            </div>
        );
    }
}

export default Car;