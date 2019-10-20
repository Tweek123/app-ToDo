export const addTask = (inputVal) => ({ type: "ADD_TASK", inputVal: inputVal});
export const deleteTask = (id) => ({ type: "DELETE_TASK", id: id });
export const changeTask = (inputVal ,id) => ({ type: "CHANGE_TASK", inputVal: inputVal , id: id });
export const doneTask = (id) => ({ type: "DONE_TASK", id: id });

