import { connect } from 'react-redux';
import BacklogList from './backlog_list';

const mapStateToProps = ({ entities }) => {
  const tasks = Object.values(entities.backlog);
  return {
    tasks
  };
};

export default connect(mapStateToProps)(BacklogList);