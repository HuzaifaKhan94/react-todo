import React, {Component} from 'react';

const PLACEHOLDER = 'Enter task here';
class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = event => {
        this.setState({
            content: event.target.value
        })
    }

    handleFormSubmit = event => {
        // Prevent default form submission to override
        event.preventDefault();
        this.props.addTodo(this.state);
        // Reset state upon submission
        this.setState( {
            content: ''
        });
    }

    render() {
        return (
            <div className="">
                <form onSubmit={this.handleFormSubmit}>
                    <p className="control is-expanded">
                        <input onChange={this.handleChange} className="input" placeholder={PLACEHOLDER} value={this.state.content}></input>
                    </p>
                </form>
            </div>
        )
    }
}

export default AddTodo;