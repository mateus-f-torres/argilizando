//@flow
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import App from 'Components/FullApp/App.js';

const mapStateToProps = (state) => {
  return {
    done: state.done,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// $FlowFixMe
const FullApp = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

export default FullApp;
