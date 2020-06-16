import React, { Component } from 'react';

import './tasks.styles.scss';
import SingleTask from '../single-task/single-task.component';

class Tasks extends Component {
    constructor(props){
        super(props);

        this.state = {
            important: false,
            completed: false,
            tasks: []
        }
    }

    componentDidMount(){
        this.getTasks();
    }

    getTasks = direction => {
        // console.log(this.props.token)
        fetch('http://localhost:8080/todo/tasks', {
            method: 'GET',
            // headers: {
            //     Authorization: 'Bearer ' + this.props.token
            // }
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

    updateCompletePostHandler = taskId => {
        const cmplt = this.state.tasks.filter(task => {
            if(task._id === taskId){
                return task.task
            }
        })
        fetch('http://localhost:8080/todo/task-complete/' + taskId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            completed: !cmplt[0].completed
          })
        })
        .then(res => {
            if (res.status === 422) {
                throw new Error(
                "Validation failed."
                );
            }
            if (res.status !== 200 && res.status !== 201) {
                console.log('Error!');
                throw new Error('Updating failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
            this.setState({ completed: resData.task.completed });
        })
        .catch(err => {
            console.log(err);
        });
    }

    updateImportantPostHandler = taskId => {
        const cmplt = this.state.tasks.filter(task => {
            if(task._id === taskId){
                return task.task
            }
        })
        fetch('http://localhost:8080/todo/task-important/' + taskId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            important: !cmplt[0].important
          })
        })
        .then(res => {
            if (res.status === 422) {
                throw new Error(
                "Validation failed."
                );
            }
            if (res.status !== 200 && res.status !== 201) {
                console.log('Error!');
                throw new Error('Updating failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
            this.setState({ important: !this.state.important });
        })
        .catch(err => {
            console.log(err);
        });
    };

    deletePostHandler = taskId => {
        fetch('http://localhost:8080/todo/task/' + taskId, {
        method: 'DELETE'
        })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
            throw new Error('Deleting a task failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
            this.setState(prevState => {
            const updatedTasks = prevState.tasks.filter(p => p._id !== taskId);
            return { tasks: updatedTasks };
            });
        })
        .catch(err => {
            console.log(err);
        });
    };

    render(){
        const { tasks } = this.state;
        // console.log(tasks);
        return(
            <div>
                {tasks.map(task => {
                    // console.log(task);
                    if(!task.completed){
                        return <SingleTask 
                            key={ task._id }
                            task={task.task}
                            onDelete={this.deletePostHandler.bind(this, task._id)}
                            onUpdateImportant={this.updateImportantPostHandler.bind(this, task._id)}
                            onUpdateComplete = {this.updateCompletePostHandler.bind(this, task._id)}
                            isImportant = {task.important}
                        />
                    }
                })}
                <h2>Completed!</h2>
                {tasks.map(task => {
                    // console.log(task);
                    if(task.completed){
                        return <SingleTask 
                            key={ task._id }
                            task={task.task}
                            onDelete={this.deletePostHandler.bind(this, task._id)}
                            onUpdateImportant={this.updateImportantPostHandler.bind(this, task._id)}
                            onUpdateComplete = {this.updateCompletePostHandler.bind(this, task._id)}
                            isImportant = {task.important}
                        />
                    }
                })}
            </div>
        );
    }

}

export default Tasks;