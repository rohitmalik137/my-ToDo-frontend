import React from 'react';

import './left-navigation-links.styles.scss';

const LeftNavigationLinks = ({icon, text}) => (
    <div className='leftnavigationlink'>
        <div className='icon'>{ icon }</div>
        <div className='text'>{ text }</div>
    </div>
)

export default LeftNavigationLinks;