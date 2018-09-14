//@flow
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import FinalCharacter from 'Components/UpdateFinal/FinalCharacter.js';
import type {State} from 'Types/state.js';

const mapStateToProps = (state: State) => {
  return {
    char: state.done.char,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// $FlowFixMe
const UpdateFinal = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalCharacter));

export default UpdateFinal;
