import { sortByDate, sortByName } from '../sort';

const initialState = {
  todos: []
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: state.todos.concat({ date: new Date(), value: action.value })
      };

    case 'SORT_TODO': {
      let sorted = [...state.todos];

      if (action.sort === 'name') {
        sorted.sort(sortByName);
      }

      if (action.sort === 'date') {
        sorted.sort(sortByDate);
      }

      return {
        todos: sorted
      }
    }

    default:
      return state;
  }
};

export default reducer