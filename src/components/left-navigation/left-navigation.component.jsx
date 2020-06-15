import React from 'react';
import { Link } from 'react-router-dom';

import './left-navigation.styles.scss';
import LeftNavigationLinks from '../left-navigation-links/left-navigation-links.component';

const LeftNavigation = () => (
    <div className='main__wrapper'>
        <div className='left-navigation-links__wrapper'>
            <Link to='/tasks/myday' style={{ textDecoration: 'none' }}>
                <LeftNavigationLinks icon='&#9734;' text='My Day'  />
            </Link>
        </div>
        <div className='left-navigation-links__wrapper'>
            <Link to='/tasks/important' style={{ textDecoration: 'none' }}>
                <LeftNavigationLinks icon='&#9734;' text='Important'  />
            </Link>
        </div>
        <div className='left-navigation-links__wrapper'>
            <Link to='/tasks/planned' style={{ textDecoration: 'none' }}>
                <LeftNavigationLinks icon='&#9734;' text='Planned'  />
            </Link>
        </div>
        <div className='left-navigation-links__wrapper'>
            <Link to='/tasks/assigned_to_me' style={{ textDecoration: 'none' }}>
                <LeftNavigationLinks icon='&#9734;' text='Assigned to you'  />
            </Link>
        </div>
        <div className='left-navigation-links__wrapper'>
            <Link to='/tasks/inbox' style={{ textDecoration: 'none' }}>
                <LeftNavigationLinks icon='&#9734;' text='Tasks'  />
            </Link>
        </div>
    </div>
)

export default LeftNavigation;