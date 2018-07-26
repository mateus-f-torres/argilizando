import { connect } from 'react-redux';
import { showMenu, showRace, showScore, showClass, showBackground, showCharacter, showFinal } from '../actions';
import App from '../components/App.jsx';

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    done: state.done
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showMenu: () => {
      dispatch(showMenu())
    },
    showRace: () => {
      dispatch(showRace())
    },
    showScore: () => {
      dispatch(showScore())
    },
    showClass: () => {
      dispatch(showClass())
    },
    showBackground: () => {
      dispatch(showBackground())
    },
    showCharacter: () => {
      dispatch(showCharacter())
    },
    showFinal: () => {
      dispatch(showFinal())
    }
  };
};

const FullApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default FullApp;
