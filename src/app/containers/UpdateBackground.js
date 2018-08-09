import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { displayBackground, lockBackground } from '../actions';
import PlayerBackground from '../components/PlayerBackground.jsx';

const mapStateToProps = (state) => {
  return {
    chosen: state.background.chosen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBack: (background) => {
      dispatch(displayBackground(background));
    },
    lockBack: (background) => {
      dispatch(lockBackground(background));
    }
  };
};

const UpdateBackground = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBackground));

export default UpdateBackground;
