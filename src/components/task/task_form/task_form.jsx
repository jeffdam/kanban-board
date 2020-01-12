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
      this.props.hideForm();
    };
  }

  render() {
    const { formType } = this.props;
    const { title, description, dueDate } = this.state;
    return (
      <article className="task-form">
        <div className="task-form-header">
          <h3>{formType} a Task</h3>
          <i 
            class="far fa-times-circle"
            onClick={this.props.hideForm}
          ></i>
        </div>
        <form onSubmit={this.handleSubmit()}>
          <label>
            Task
            <input
              type="text"
              value={title}
              onChange={this.handleUpdate("title")}
              placeholder="Task"
              required
            />
          </label>
          <label>
            Description
            <input
              type="text"
              value={description}
              placeholder="Description"
              onChange={this.handleUpdate("description")}
            />
          </label>
          <label>
            Due Date
            <input
              type="date"
              value={dueDate}
              onChange={this.handleUpdate("dueDate")}
            />
          </label>
          <button type="submit">{formType}</button>
        </form>
      </article>
    );
  } 
}

export default TaskForm;