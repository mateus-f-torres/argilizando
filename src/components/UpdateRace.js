//@flow
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {displayRace} from 'Store/races/actions';
import {lockRace} from 'Store/done/actions';
import MenuRace from 'Components/UpdateRace/MenuRace.js';
import type {State} from 'Types/state.js';

const mapStateToProps = (state: State) => {
  return {
    race: state.race,
  };
};

const mapDispatchToProps = (dispatch: *) => {
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
