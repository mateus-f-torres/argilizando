import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/App.jsx';

const mapStateToProps = (state) => {
  return {
    done: state.done
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const FullApp = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

export default FullApp;
