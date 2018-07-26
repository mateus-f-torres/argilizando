import { connect } from 'react-redux';
import { showMain, showVisual, showRP } from '../actions';
import FinalCharacter from '../components/FinalCharacter.jsx';

const mapStateToProps = (state) => {
  return {
    char: state.done.character,
    show: state.final
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showMain: () => {
      dispatch(showMain())
    },
    showVisual: () => {
      dispatch(showVisual())
    },
    showRP: () => {
      dispatch(showRP())
    }
  };
};

const UpdateFinalCharacter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalCharacter);

export default UpdateFinalCharacter;
