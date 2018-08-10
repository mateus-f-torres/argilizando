import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {displayRace, lockRace} from '../actions';
import PlayerRace from '../components/PlayerRace.jsx';

const mapStateToProps = (state) => {
  return {
    race: state.race.chosen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRace: (race) => {
      dispatch(displayRace(race));
    },
    lockRace: (race) => {
      dispatch(lockRace(race));
    },
  };
};

const UpdateRace = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerRace));

export default UpdateRace;
