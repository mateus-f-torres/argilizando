import { connect } from 'react-redux';
import { getCharacter, lockCharacter } from '../actions';
import CreateCharacter from '../components/CreateCharacter.jsx';

const mapStateToProps = (state) => {
  return {
    race: state.done.race,
    gameClass: state.done.gameClass,
    score: state.done.score,
    background: state.done.background
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacter: (character) => {
      dispatch(getCharacter(character))
    },
    lockCharacter: (character) => {
      dispatch(lockCharacter(character))
    }
  }
}

const UpdateCreate = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCharacter);

export default UpdateCreate;
