import { connect } from "react-redux";
import TaskDisplay from "./task_display";
import { changeStatus } from "../../../actions/task_action";

const mapDispatchToProps = dispatch => {
  return {
    changeStatus: (task, dir) => dispatch(changeStatus(task, dir))
  };
};

export default connect(null, mapDispatchToProps)(TaskDisplay);
