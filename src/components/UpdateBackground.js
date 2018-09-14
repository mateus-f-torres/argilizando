//@flow
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {displayBackground} from 'Store/backgrounds/actions';
import {lockBackground} from 'Store/done/actions';
import MenuBack from 'Components/UpdateBackground/MenuBack.js';
import type {State} from 'Types/state.js';

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
