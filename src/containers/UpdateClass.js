import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {displayClass, lockClass} from '../actions';
import MenuClass from '../components/MenuClass.jsx';

const mapStateToProps = (state) => {
  return {
    _class: state._class,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClass: (choice) => {
      dispatch(displayClass(choice));
    },
    lockClass: (gameClass) => {
      dispatch(lockClass(gameClass));
    },
  };
};

const UpdateClass = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuClass));

export default UpdateClass;
