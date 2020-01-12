import { connect } from "react-redux";
import KanbanBoard from './kanban_board';
import { fetchTasks } from '../actions/task_action';

const mapStateToProps = ({entities}) => {
  return entities;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);
