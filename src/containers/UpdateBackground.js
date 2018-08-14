//@flow
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {displayBackground, lockBackground} from '../actions';
import MenuBack from '../components/MenuBack.jsx';
import type {State} from '../types/state.js';

const mapStateToProps = (state: State) => {
  return {
    back: state.background,
  };
};

const mapDispatchToProps = (dispatch: *) => {
  return {
    getBack: (background) => {
      dispatch(displayBackground(background));
    },
    lockBack: (background) => {
      dispatch(lockBackground(background));
    },
  };
};

const UpdateBackground = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBack));

export default UpdateBackground;
