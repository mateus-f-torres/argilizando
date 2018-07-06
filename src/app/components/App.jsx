import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header.jsx';
import UpdateScores from '../containers/UpdateScores.js';
import UpdateRace from '../containers/UpdateRace.js';

import 'Styles/App.scss';                // last stylesheet called, main layout
//import logo from 'Images/logo.svg'; // import using webpack resolve.alias

const App = () => (
  <Router>
  <div>
    <Header />
    <main>
      <form id="dnd-form" action="#" method="POST" name="character">
        <Route exact={true} path="/score" component={UpdateScores}/>
        <Route exact={true} path="/race" component={UpdateRace}/>
      </form>  
    </main>
  </div>
  </Router>  
)

export default App;
