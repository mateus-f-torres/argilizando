import { connect } from 'react-redux';
import { displayClass, showClassSelection } from '../actions';
import { doneClass, showMenu } from '../actions';
import PlayerClass from '../components/PlayerClass.jsx';

const mapStateToProps = (state) => {
  return {
    selected: state.gameClass.show,
    chosen: state.gameClass.chosen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClass: (choice) => {
      dispatch(displayClass(choice))
    },
    noClass: () => {
      dispatch(showClassSelection())
    },
    lockClass: () => {
      dispatch(doneClass())
      dispatch(showMenu())
    }
  }
}

const UpdateClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerClass);

export default UpdateClass;
