import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {displayRace, lockRace} from '../actions';
import MenuRace from '../components/MenuRace.jsx';

const mapStateToProps = (state) => {
  return {
    race: state.race,
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
)(MenuRace));

export default UpdateRace;
