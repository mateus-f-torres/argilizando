import { connect } from 'react-redux';
import { displayBackground, showBackgroundSelection } from '../actions';
import { doneBackground, showMenu } from '../actions';
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
    lockBack: () => {
      dispatch(doneBackground())
      dispatch(showMenu())
    }
  }
}

const UpdateBackground = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBackground);

export default UpdateBackground;
