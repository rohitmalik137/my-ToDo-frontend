import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

import './signup.styles.scss';
import logo from '../../assets/logo.png';
import Image from '../../components/image/image.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class Signup extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in__wrapper'>
                <div className='sign-in'>
                    <div> <Image logo={ logo } isLogo="yes" /> </div>
                    <form onSubmit={e => this.props.onSignup(e, this.state)}>
                        <FormInput 
                            name='email' 
                            type='email' 
                            label='email' 
                            handleChange={this.handleChange} 
                            value={this.state.email} 
                            required 
                        />
                        <FormInput 
                            name='password' 
                            type='password' 
                            label='password' 
                            handleChange={this.handleChange} 
                            value={this.state.password} 
                            required 
                        />
                        <div className='buttons'>
                            <CustomButton type='submit' > Signup </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;