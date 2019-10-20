import React, {Component } from "react";



export class Task extends Component   {
    constructor(props) {
        super(props);

        this.state = { inputVal: "" };
      }

      handleChange(e) {
        this.setState({inputVal: e.target.value})
      }

      radioBtnChange() {
        let id = this.props.task.id;

        this.props.doneTask(id);
      }

      onDelTaskBtnClick() {
        let id = this.props.task.id;

        this.props.deleteTask(id);
      }

      onChangeTaskBtnClick() {
        let id = this.props.task.id;

        let inputVal = this.state.inputVal;
        this.props.changeTask(inputVal, id);
      }

      TaskDone() {

      }

    
      
    render() {

        let TextStatus;

        if(this.props.task.done) {
            TextStatus = <div className = "ToDo__task-status task-done">DONE</div>
        } else {
            TextStatus = <div className = "ToDo__task-status task-not-finish">NOT FINISH</div>
        }

        return (
            <div className = {"ToDo__task"}>
                <h2 className = {"ToDo__task-name"} >{this.props.task.name}</h2>
                <input className = {"ToDo__input"} onChange={this.handleChange.bind(this)}/>
                <button className = {"ToDo__button"} onClick={this.onChangeTaskBtnClick.bind(this)}>CHANGE TASK</button>
                <button className = {"ToDo__button"} onClick={this.onDelTaskBtnClick.bind(this)}>DELETE TASK</button>
                <input className = {"ToDo__input-done"} type="radio" onChange={this.radioBtnChange.bind(this)}/>
                {TextStatus}
            </div>
        );
    }
};
