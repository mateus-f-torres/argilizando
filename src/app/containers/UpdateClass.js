import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { displayClass, lockClass } from '../actions';
import PlayerClass from '../components/PlayerClass.jsx';

const mapStateToProps = (state) => {
  return {
    chosen: state.gameClass.chosen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClass: (choice) => {
      dispatch(displayClass(choice));
    },
    lockClass: (gameClass) => {
      dispatch(lockClass(gameClass));
    }
  };
};

const UpdateClass = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerClass));

export default UpdateClass;
