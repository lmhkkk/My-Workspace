import React, { Component } from 'react';

class DemoState extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthencated :false,
        };
        this.username = "Minh Hoang";
    }
    onLogIn= ()=>{
        this.setState({
            isAuthencated :true,
        });
    }
    onLogOut = ()=>{
        this.setState({
            isAuthencated :false,
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.isAuthencated?
                    <div>
                        <p>Hello {this.username}</p>
                        <button onClick = {this.onLogOut}>Log Out</button>
                    </div>:
                    <div>
                        <button onClick = {this.onLogIn}>Log In</button>
                    </div>
                }
            </div>
        );
    }
}

export default DemoState;