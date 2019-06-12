import React, { Component } from 'react';

import Todos from './component/Todos';
import TodoInput from './component/TodoInput'
import TodoFilters from './component/TodoFilters'

import { connect } from 'react-redux'

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleInputSubmit(value) {
    this.props.addTodo(value)
  }

  handleFilterChange(value) {
    this.props.sortTodo(value)
  }

  render() {
    const todos  = this.props.todos;
    return (
      <div>
        <TodoFilters onChange={this.handleFilterChange} />
        <TodoInput onSubmit={this.handleInputSubmit}/>
        <Todos todos={todos.map(t => t.value)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => dispatch({
      type: 'ADD_TODO',
      value: value
    }),
    sortTodo: (sort) => dispatch({
      type: 'SORT_TODO',
      sort
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)