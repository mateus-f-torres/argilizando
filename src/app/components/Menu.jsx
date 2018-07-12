import * as React from 'react';

import 'Styles/Menu.scss';

const btnClass = "menu-btn waves-effect waves-light";

const Menu = (props) => (
  <form>
    <section id='MENU'>
      <h1>Argilizando</h1>
      <hr />
      <div>
        <button className={btnClass} onClick={props.race}>Player Race</button>
        <button className={btnClass} onClick={props.score}>Ability Scores</button>
    </div>
    </section>
  </form>
);

export default Menu;
