import React, { Component } from 'react';

import './task-submit-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class TaskSubmitForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            task: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:8080/todo/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task: this.state.task
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
              throw new Error('Adding a task failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
            this.setState({
                task: ''
            })
        })
        .catch(err => {
            console.log(err);
            this.setState({
                task: ''
            })
        });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <form 
                onSubmit={this.handleSubmit}
            >
                <FormInput 
                    name='task' 
                    type='text' 
                    label='Add a task'
                    fullWidth='yes'
                    handleChange={this.handleChange} 
                    value={this.state.task} 
                    required 
                />
                <div className='buttons'>
                    <CustomButton type='submit' > ADD </CustomButton>
                </div>
            </form>
        )
    }
}

export default TaskSubmitForm;