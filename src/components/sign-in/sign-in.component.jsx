import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    render() {
        return (
        <div className="sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with your user and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" 
                name="email" 
                handleChange={this.handleChange} 
                value={this.state.email} 
                label="Email"
                required/>

                <FormInput type="password" 
                name="password" 
                handleChange={this.handleChange} 
                value={this.state.password}  
                label="Password"
                required/>

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
        );
    }
}

export default SignIn