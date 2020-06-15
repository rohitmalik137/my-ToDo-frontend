import React from 'react';

import './single-task.styles.scss';

const SingleTask = props => (
    <div className='single-task'>
        <div className='icon'>&#9675;</div>
        <div>{props.task}</div>
    </div>
);

export default SingleTask;