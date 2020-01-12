import React from 'react';
import TaskListContainer from '../components/task/task_list/task_list_container';

class KanbanBoard extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <main className="kanban-board">
        <section className="kanban-board-header">
          <h2>BACKLOG</h2>
          <h2>PRIORITY</h2>
          <h2>IN PROGRESS</h2>
          <h2>COMPLETED</h2>
        </section>
        <section className="kanban-board-lists">
          <TaskListContainer listType={"backlog"}/>
          <TaskListContainer listType={"priority"}/>
          <TaskListContainer listType={"inProgress"}/>
          <TaskListContainer listType={"completed"}/>
        </section>
      </main>
    )
  }
}

export default KanbanBoard;