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
      this.props.changeFormState();
    };
  }

  render() {
    const { formType } = this.props;
    const { title, description, dueDate } = this.state;
    return (
      <article>
        <h2>Task {formType} Form</h2>
        <form onSubmit={this.handleSubmit()}>
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={this.handleUpdate("title")}
              required
            />
          </label>
          <label>
            Description
            <input
              type="text"
              value={description}
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