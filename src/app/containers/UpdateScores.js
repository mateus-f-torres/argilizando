import { connect } from 'react-redux';
import { resetScore, incrementScore, decrementScore, toggleDescription } from '../actions';
import { doneScore, showMenu } from '../actions';
import AbilityScores from '../components/AbilityScores.jsx';

const mapStateToProps = (state) => {
  return {
    total: state.score.total,
    str: state.score.str,
    dex: state.score.dex,
    con: state.score.con,
    int: state.score.int,
    wis: state.score.wis,
    cha: state.score.cha
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    scorePlus: (ability) => {
      dispatch(incrementScore(ability))
    },
    scoreMinus: (ability) => {
      dispatch(decrementScore(ability))
    },
    toggleText: (ability) => {
      dispatch(toggleDescription(ability))
    },
    resetBtn: () => {
      dispatch(resetScore())
    },
    lockScore: () => {
      dispatch(doneScore())
      dispatch(showMenu())
    }
  }
}

const UpdateScores = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityScores);

export default UpdateScores;
