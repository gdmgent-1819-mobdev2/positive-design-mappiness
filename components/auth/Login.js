import React, { Component } from 'react';

class Login extends Component{
    state = {
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
                Login form
            * */

           <form>
               <input placeholder="Email" 
                value={this.state.email} 
                onChange={e => this.setState({ email: e.target.value})}>
                </input>
                <input placeholder="Password" 
                value={this.state.password} 
                onChange={e => this.setState({ password: e.target.value})}>
                </input>
                <button onClick={e => this.onSubmit(e)}>Login</button>
           </form>

        )
    }
}