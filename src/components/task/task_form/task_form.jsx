import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.task;
  }

  handleUpdate(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit() {
    return e => {
      e.preventDefault();
      this.props.formAction(this.state);
    };
  }

  render() {
    return (
      <article>
        <h2>Task Form</h2>
        <form onSubmit={this.handleSubmit()}>
          <label>Title
            <input type="text" required onChange={this.handleUpdate('title')}/>
          </label>
          <label>Description
            <input type="text" onChange={this.handleUpdate('description')}/>
          </label>
          <label>Due Date
            <input type="date" onChange={this.handleUpdate('dueDate')}/>
          </label>
          <button type="submit">Create Task</button>
        </form>
      </article>
    );
  } 
}

export default TaskForm;