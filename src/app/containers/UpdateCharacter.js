import { connect } from 'react-redux';
import { getCharacter, changeName, changeSkill, changeLang, changeTool, changePack, changeGear, changeBody, changePast, lockCharacter } from '../actions';
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
    changeBody: (pair) => {
      dispatch(changeBody(pair))
    },
    changePast: (pair) => {
      dispatch(changePast(pair))
    },
    changeSkill: (pair) => {
      dispatch(changeSkill(pair))
    },
    changeLang: (pair) => {
      dispatch(changeLang(pair))
    },
    changeTool: (pair) => {
      dispatch(changeTool(pair))
    },
    changePack: (pack) => {
      dispatch(changePack(pack))
    },
    changeGear: (gear) => {
      dispatch(changeGear(gear))
    },
    changeName: (name) => {
      dispatch(changeName(name))
    },
    backBtn: () => {
      dispatch(showMenu())
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
