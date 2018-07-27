import { connect } from 'react-redux';
import { displayBackground, showBackgroundSelection, lockBackground } from '../actions';
import { showMenu } from '../actions';
import PlayerBackground from '../components/PlayerBackground.jsx';

const mapStateToProps = (state) => {
  return {
    selected: state.background.show,
    chosen: state.background.chosen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBack: (background) => {
      dispatch(displayBackground(background))
    },
    noBack: () => {
      dispatch(showBackgroundSelection())
    },
    lockBack: (background) => {
      dispatch(lockBackground(background))
      dispatch(showMenu())
    }
  }
}

const UpdateBackground = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBackground);

export default UpdateBackground;
