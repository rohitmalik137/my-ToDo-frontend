import React, { Component } from 'react';

import './homepage.styles.scss';
import SearchBox from '../../components/search-box/search-box.component';
import LeftNavigation from '../../components/left-navigation/left-navigation.component';
import TasksWrapper from '../../components/tasks-wrapper/tasks-wrapper.component';

class HomePage extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          searchField : ""
        }
    }

    renderSwitch(args){
        switch(args){
            case 'inbox':
                return <TasksWrapper />
            case 'myday':
                return 'myday'
            case 'important':
                return 'important'
            case 'planned':
                return 'planned'
            case 'assigned_to_me':
                return 'assigned_to_me'
            default:
                return <TasksWrapper />
        }
    }

    handleChange = (e) => {
        this.setState({ searchField : e.target.value});
    }

    render(){
        return (
        <div className='homepage'>
            <header className='header'>
                <div>To Do</div>
                <SearchBox placeholder='Search' handleChange={this.handleChange} />
                <div>My Profile</div>
            </header>
            <div className='main'>
                <div className='leftNavigation'>
                    <LeftNavigation />
                </div>
                <div className='main__content'>
                    { this.renderSwitch(this.props.match.params.navigate) }
                </div>
            </div>
        </div>
        );
    }
}

export default HomePage;