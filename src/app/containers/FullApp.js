import { connect } from 'react-redux';
import { showMenu, showRace, showScore, showClass, showBackground } from '../actions';
import App from '../components/App.jsx';

const mapStateToProps = (state) => {
  return {
    menu: state.menu.menu,
    race: state.menu.race,
    score: state.menu.score,
    gameClass: state.menu.gameClass,
    background: state.menu.background,
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
    }
  };
};

const FullApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default FullApp;
