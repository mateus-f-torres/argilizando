import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {displayBackground, lockBackground} from '../actions';
import PlayerBack from '../components/PlayerBack.jsx';

const mapStateToProps = (state) => {
  return {
    chosen: state.background.chosen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBack: (background) => {
      dispatch(displayBackground(background));
    },
    lockBack: (background) => {
      dispatch(lockBackground(background));
    },
  };
};

const UpdateBackground = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBack));

export default UpdateBackground;
