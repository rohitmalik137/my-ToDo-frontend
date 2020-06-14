import React from 'react';
import { Link } from 'react-router-dom';

import './login.styles.scss';
import logo from '../../assets/logo.png';
import Image from '../../components/image/image.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    // handleSubmit = async event => {
    //     event.preventDefault();

    //     const { email, password } = this.state;

    //     try{
    //         await auth.signInWithEmailAndPassword(email, password);
    //         this.setState({email: '', password: ''});
    //     } catch(error){
    //         console.error(error);
    //     }

    // }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in__wrapper'>
                <div className='sign-in'>
                    <div> <Image logo={ logo } isLogo="yes" /> </div>
                    <form 
                    onSubmit={e =>
                        this.props.onLogin(e, {
                        email: this.state.email,
                        password: this.state.password
                        })
                    }
                    >
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
                        <p className="anchor__wrapper">No account? <Link to='/signup' className="anchor">Create One!</Link> </p>
                        <div className='buttons'>
                            <CustomButton type='submit' > LOGIN </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;