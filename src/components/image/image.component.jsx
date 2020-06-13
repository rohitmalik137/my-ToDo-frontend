import React from 'react';

import './image.styles.scss';

const Image = ({ logo, isLogo }) => (
    <div className='image__wrapper'>
        <img src={logo} className={` ${isLogo ? 'logo' : ''} image `} alt="logo" />
    </div>
);

export default Image;