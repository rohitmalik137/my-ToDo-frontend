import React from 'react';
import { Link } from 'react-router-dom';

import './welcome.styles.scss';
import left from '../../assets/welcome-left.png';
import right from '../../assets/welcome-right.png';
import logo from '../../assets/logo.png';
import Image from '../../components/image/image.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const WelcomePage = () => (
    <div className='welcome-page'>
        <div> <Image logo={ left } /> </div>
        <div className='middle'>
            <div> <Image logo={ logo } isLogo="yes" /> </div>
            <h1>Microsoft To Do</h1>
            <p>To Do gives you focus, from work to play.</p>
            <div className="btn">
                <Link to='/login'>
                    <CustomButton>Get Started</CustomButton>
                </Link>
            </div>
        </div>
        <div> <Image logo={ right } /> </div>
    </div>
);

export default WelcomePage;