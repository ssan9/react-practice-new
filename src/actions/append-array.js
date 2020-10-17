// an example todo argument would be 'Learn React',
const ADD_TO_DO = 'ADD_TO_DO';

export const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}
