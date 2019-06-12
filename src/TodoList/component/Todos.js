import React, { Component } from 'react';

class Todos extends Component {
  render() {

    const { todos } = this.props;

    return (
      <ul>
        {todos.map(todo => {
          return <li key={todo}>{todo}</li>
        })}
      </ul>
    );
  }
}

export default Todos;