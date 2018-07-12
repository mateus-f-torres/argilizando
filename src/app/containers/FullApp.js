import { connect } from 'react-redux';
import { showMenu, showRace, showScore } from '../actions';
import App from '../components/App.jsx';

const mapStateToProps = (state) => {
  return {
    menu: state.menu.menu,
    race: state.menu.race,
    score: state.menu.score
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
    }
  };
};

const FullApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default FullApp;
