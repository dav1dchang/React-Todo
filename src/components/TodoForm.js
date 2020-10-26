import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input:''
        }
    }

    handleChanges = e => {
        this.setState({
            input:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input)
        this.setState({
            input: '',
        })
    }

    handleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.handleClearItems()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.input} 
                    onChange={this.handleChanges} 
                    type='text'
                    name='item'
                />
                <button>Add</button>
                <button onClick={this.handleClick} className='clear-button'>
                    Clear
                </button>
            </form>
        )
    }
}

export default TodoForm;