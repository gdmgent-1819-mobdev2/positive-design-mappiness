import React, { Component } from 'react';

class SignIn extends Component{
    state = {
        firstName = '',
        lastName = '',
        userName = '',
        email = '',
        password = '',
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit();
        console.log(this.state);
    };
    render(){
        return(
            /*
                SignIn form
            * */

           <form>
                <input placeholder="First name" 
                value={this.state.firstName} 
                onChange={e => this.setState({ firstName: e.target.value})}>
                </input>
                <input placeholder="Last name" 
                value={this.state.lastName} 
                onChange={e => this.setState({ lastName: e.target.value})}>
                </input>
                <input placeholder="User name" 
                value={this.state.userName} 
                onChange={e => this.setState({ userName: e.target.value})}>
                </input>
                <input placeholder="Email" 
                value={this.state.email} 
                onChange={e => this.setState({ email: e.target.value})}>
                </input>
                <input placeholder="Password" 
                value={this.state.password} 
                onChange={e => this.setState({ password: e.target.value})}>
                </input>
                <button onClick={e => this.onSubmit(e)}>Register</button>
           </form>

        )
    }
}