//@flow
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {displayClass} from 'Store/classes/actions';
import {lockClass} from 'Store/done/actions';
import MenuClass from 'Components/UpdateClass/MenuClass.js';
import type {State} from 'Types/state.js';

const mapStateToProps = (state: State) => {
  return {
    _class: state._class,
  };
};

const mapDispatchToProps = (dispatch: *) => {
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
