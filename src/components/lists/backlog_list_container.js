import { connect } from 'react-redux';
import BacklogList from './backlog_list';
import { deleteTask } from "../../actions/task_action";

const mapStateToProps = ({ entities }) => {
  const tasks = Object.values(entities.backlog);
  return {
    tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: task => dispatch(deleteTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BacklogList);