import React, {Component } from "react";



export class AddTask extends Component   {
    constructor(props) {
        super(props);

        this.state = { inputVal: "" };
      }

      handleChange(e) {
        this.setState({inputVal: e.target.value})
      }

      onAddTaskBtnClick() {
        let inputVal = this.state.inputVal;
        this.props.addTask(inputVal);
      }


      
    render() {
        return (
            <div className="ToDo__add-task">
                <input className = {"ToDo__input"} onChange={this.handleChange.bind(this)}/>
                <button className = {"ToDo__button"} onClick={this.onAddTaskBtnClick.bind(this)}>ADD TASK</button>
            </div>
        );
    }
};
