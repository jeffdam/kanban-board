import React from 'react';
import TaskListContainer from '../components/task_list/task_list_container';

class KanbanBoard extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <section>
        <TaskListContainer listType={"backlog"}/>
        <TaskListContainer listType={"priority"}/>
        <TaskListContainer listType={"inProgress"}/>
        <TaskListContainer listType={"completed"}/>
      </section>
    )
  }
}

export default KanbanBoard;