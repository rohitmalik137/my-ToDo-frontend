import React from 'react';

import './tasks-wrapper.styles.scss';
import TaskSubmitForm from '../task-submit-form/task-submit-form.component';
import Tasks from '../tasks/tasks.component';

const TasksWrapper = () => (
    <div className='wrapper'>
        <h2>Tasks ...</h2>
        <TaskSubmitForm />
        <Tasks />
    </div>
)

export default TasksWrapper;