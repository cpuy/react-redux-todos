import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
import { createStore } from 'redux';

import { Provider } from 'react-redux'

import reducer from './redux/reducer'


const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
