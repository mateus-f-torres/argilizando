import { connect } from 'react-redux';
import { showMain, showEquip, showSpell, showTrait, showBody, showPast } from '../actions';
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
    showEquip: () => {
      dispatch(showEquip())
    },
    showSpell: () => {
      dispatch(showSpell())
    },
    showTrait: () => {
      dispatch(showTrait())
    },
    showBody: () => {
      dispatch(showBody())
    },
    showPast: () => {
      dispatch(showPast())
    }
  };
};

const UpdateFinalCharacter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalCharacter);

export default UpdateFinalCharacter;
