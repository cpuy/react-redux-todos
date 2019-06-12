import React, { Component } from 'react';

import Todos from './component/Todos';
import TodoInput from './component/TodoInput'
import TodoFilters from './component/TodoFilters'

import { sortByDate, sortByName } from '../sort'

export default class TodoList extends Component {

  constructor(props) {
    super(props);

    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

    this.state = {
      todos: []
    }
  }

  handleInputSubmit(value) {
    this.setState(state => ({
      todos: [
        ...state.todos, { date: new Date(), value }
      ]
    }))
  }

  handleFilterChange(value) {
    let sorted;

    if (value === 'name') {
      sorted = this.state.todos.sort(sortByName);
    }

    if (value === 'date') {
      sorted = this.state.todos.sort(sortByDate);
    }

    this.setState({
      todos: sorted
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoFilters onChange={this.handleFilterChange} />
        <TodoInput onSubmit={this.handleInputSubmit}/>
        <Todos todos={todos.map(t => t.value)} />
      </div>
    )
  }
}