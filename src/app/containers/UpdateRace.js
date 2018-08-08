import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { displayRace, showRaceSelection, lockRace } from '../actions';
import PlayerRace from '../components/PlayerRace.jsx';

const mapStateToProps = (state) => {
  return {
    selected: state.race.show,
    race: state.race.chosen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRace: (race) => {
      dispatch(displayRace(race))
    },
    noRace: () => {
      dispatch(showRaceSelection())
    },
    lockRace: (race) => {
      dispatch(lockRace(race))
    }
  }
}

const UpdateRace = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerRace));

export default UpdateRace;
