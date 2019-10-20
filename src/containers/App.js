import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AddTask } from '../components/AddTask'
import { Task } from '../components/Task'
import * as taskActions from '../actions/actions'

class App extends React.Component {



    render() {

        let Tasks = [];

        for (let id in this.props.tasks) {
            let task = this.props.tasks[id];
            
            Tasks.push(
                <Task 
                    task = {task} 
                    deleteTask = {this.props.taskActions.deleteTask}
                    changeTask = {this.props.taskActions.changeTask}
                    doneTask = {this.props.taskActions.doneTask}
                />
            )
        }


        if(Tasks.length === 0) {
            return (
            
                <div className="ToDo__container">
                    <AddTask addTask = {this.props.taskActions.addTask} />
                </div>
            );
        } else {

            return (
            
                <div className="ToDo__container">
                    <AddTask addTask = {this.props.taskActions.addTask} />
                    {Tasks}
                </div>
            );


        }

    }
}

const mapStateToProps = (state) => {
  return {
      tasks: state.tasks,
  };
};

function mapDispatchToProps(dispatch) {
    return {
        taskActions: bindActionCreators(taskActions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);