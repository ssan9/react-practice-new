const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.todo.concat(action.todo); // either line 14 or 15; only one of these is needed
      return [...state, action.todo];
    default:
      return state;
  }
};
