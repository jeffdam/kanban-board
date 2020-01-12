import { connect } from "react-redux";
import TaskForm from "./task_form";
import { updateTask } from "../../../actions/task_action";

const mapStateToProps = (_, { task }) => {
  return {
    formType: "Edit",
    task
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: task => dispatch(updateTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
