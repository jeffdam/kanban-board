import React from 'react';
import BacklogListContainer from '../components/lists/backlog_list_container';

class KanbanBoard extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <BacklogListContainer />
    )
  }
}

export default KanbanBoard;