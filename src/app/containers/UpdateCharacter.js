import { connect } from 'react-redux';
import { getCharacter, lockCharacter } from '../actions';
import { showMenu } from '../actions';
import PlayerCharacter from '../components/PlayerCharacter.jsx';

const mapStateToProps = (state) => {
  return {
    race: state.done.race,
    gameClass: state.done.gameClass,
    score: state.done.score,
    background: state.done.background,
    char: state.character
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacter: (character) => {
      dispatch(getCharacter(character))
    },
    lockCharacter: (character) => {
      dispatch(lockCharacter(character))
      dispatch(showMenu())
    }
  }
}

const UpdateCharacter = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerCharacter);

export default UpdateCharacter;
