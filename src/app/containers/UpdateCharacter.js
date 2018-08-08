import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCharacter, changeName, changeSkill, changeLang, changeTool, changePack, changeGear, changeBody, changePast, lockCharacter } from '../actions';
import PlayerCharacter from '../components/PlayerCharacter.jsx';

const mapStateToProps = (state) => {
  return {
    race: state.done.race,
    _class: state.done._class,
    score: state.done.score,
    back: state.done.back,
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
    lockCharacter: (character) => {
      dispatch(lockCharacter(character))
    }
  }
}

const UpdateCharacter = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerCharacter));

export default UpdateCharacter;
