import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const list = [
  {
    name: '',
    id: 1,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      list: list
    }
  }

  handleToggleItem = (itemId) => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  handleAddItem = (name) => {
    this.setState({
      list:[...this.state.list, {
        name: name,
        id: Date.now(),
        completed: false,
      }]
    })
  }

  handleClearItems = () => {
    this.setState({
      list: this.state.list.filter(item=>(!item.completed))
    })
  }
  
  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} handleClearItems={this.handleClearItems}/>
        <br></br>
        <TodoList handleToggleItem={this.handleToggleItem} list={this.state.list}/>
      </div>
    );
  }
}

export default App;
