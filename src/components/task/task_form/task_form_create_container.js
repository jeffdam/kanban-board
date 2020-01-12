import { connect } from "react-redux";
import TaskForm from "./task_form";
import { createTask } from "../../../actions/task_action";

const mapStateToProps = (_, { status }) => {
  return {
    formType: "Create",
    task: {
      id: null,
      title: "",
      status,
      dueDate: "",
      completionDate: "",
      createDate: new Date().toLocaleDateString("en-US", {year: 'numeric', month: '2-digit', day: '2-digit'}),
      notes: ""
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: task => dispatch(createTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
