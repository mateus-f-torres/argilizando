import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import FinalCharacter from '../components/FinalCharacter.jsx';

const mapStateToProps = (state) => {
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
