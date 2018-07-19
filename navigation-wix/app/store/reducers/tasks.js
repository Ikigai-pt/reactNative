import { LOAD_TASKS, ADD_TASK } from "../actions/actionTypes";

const initialState = {
  tasks: [{ id: 1, title: "hello" }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASKS: {
      return {
        ...state,
        tasks: action.tasks
      };
    }
    case ADD_TASK: {
      return {
        ...state,
        tasks: state.tasks.concat({
          id: task.id,
          title: task.title
        })
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
