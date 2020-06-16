import React from 'react';

import './single-task.styles.scss';

const SingleTask = props => (
    <div className='single-task'>
        <div className='left'>
            <div className={`${props.isComplete ? 'isComplete' : ''} icon complete `} onClick={props.onUpdateComplete}>&#10003;</div>
            <div>{props.task}</div>
        </div>
        <div className='right'>
            <div className='icon' onClick={props.onDelete}>&#9986;</div>
            <div className={`${props.isImportant ? 'important' : ''} icon `} onClick={props.onUpdateImportant}>&#9734;</div>
        </div>
    </div>
);

export default SingleTask;