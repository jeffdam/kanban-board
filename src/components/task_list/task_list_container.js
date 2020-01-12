import { connect } from 'react-redux';
import TaskList from './task_list';
import { deleteTask } from "../../actions/task_action";

const mapStateToProps = ({ entities }, { listType }) => {
  const tasks = Object.values(entities[listType]);
  return {
    listType,
    tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: task => dispatch(deleteTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);