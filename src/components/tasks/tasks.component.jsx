import React, { Component } from 'react';

import './tasks.styles.scss';
import SingleTask from '../single-task/single-task.component';

class Tasks extends Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
        this.getTasks();
    }

    getTasks = direction => {
        fetch('http://localhost:8080/todo/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status !== 200) {
                throw new Error('Failed to fetch tasks.');
            }
            return res.json();
        })
        .then(resData => {
            this.setState({
                tasks: resData.tasks.map(task => {
                    return {
                        ...task
                    }
                })
            });
        })
        .catch(this.catchError);
      };

    render(){
        const { tasks } = this.state;
        // console.log(tasks);
        return(
            <div>
                {tasks.map(task => {
                    // console.log(task);
                    return <SingleTask 
                        key={ task._id }
                        task={task.task}
                    />
                })}
            </div>
        );
    }

}

export default Tasks;