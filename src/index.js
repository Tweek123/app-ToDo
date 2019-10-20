import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore} from 'redux'
import App from "./containers/App";
import './css/main.css'
import { Provider } from 'react-redux'


const initialState = {
  tasks: {},
  taskLastId: 0
}



function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":  
        state.taskLastId = state.taskLastId + 1;
        let newTask = new Object;
        newTask.id = state.taskLastId;
        newTask.name = action.inputVal;
        newTask.done = false;
        

        state.tasks[newTask.id] = newTask; 

        return { ...state, tasks: Object.assign({}, state.tasks)};

    case "DELETE_TASK": 
        delete state.tasks[action.id];
      return { ...state, tasks: Object.assign({}, state.tasks)};
    case "CHANGE_TASK":     

        state.tasks[action.id].name = action.inputVal;
        return { ...state, tasks: Object.assign({}, state.tasks)};

      case "DONE_TASK":
        
        state.tasks[action.id].done = true;
        return { ...state, tasks: Object.assign({}, state.tasks)};

    default:
      return state;
  }
}


const store = createStore(reducer)


ReactDOM.render((    
    <Provider store={store}>
            <App/>
    </Provider>

    ), document.getElementById('root'))