import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
  incrementScore, decrementScore, toggleDescription,
  resetScore, lockScore,
} from '../actions';
import PlayerScore from '../components/PlayerScore.jsx';

const mapStateToProps = (state) => {
  return {
    total: state.score.total,
    str: state.score.str,
    dex: state.score.dex,
    con: state.score.con,
    int: state.score.int,
    wis: state.score.wis,
    cha: state.score.cha,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    scorePlus: (ability) => {
      dispatch(incrementScore(ability));
    },
    scoreMinus: (ability) => {
      dispatch(decrementScore(ability));
    },
    toggleText: (ability) => {
      dispatch(toggleDescription(ability));
    },
    resetBtn: () => {
      dispatch(resetScore());
    },
    lockScore: (chosen) => {
      dispatch(lockScore(chosen));
    },
  };
};

const UpdateScores = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerScore));

export default UpdateScores;
