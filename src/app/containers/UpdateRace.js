import { connect } from 'react-redux';
import { displayRace, showRaceSelection } from '../actions';
import { doneRace, showMenu } from '../actions';
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
    lockRace: () => {
      dispatch(doneRace())
      dispatch(showMenu())
    }
  }
}

const UpdateRace = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerRace);

export default UpdateRace;
