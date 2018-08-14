//@flow
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import FinalCharacter from '../components/FinalCharacter.jsx';
import type {State} from '../types/state.js';

const mapStateToProps = (state: State) => {
  return {
    char: state.done.char,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const UpdateFinal = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalCharacter));

export default UpdateFinal;
