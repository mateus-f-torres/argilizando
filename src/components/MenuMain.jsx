import React from 'react';
import {Link} from 'react-router-dom';


import 'Styles/MenuMain.scss';

const MenuMain = (props) => {
  let all =
    props.done.race && props.done._class
    && props.done.score && props.done.back
      ? true
      : false;

  let final = props.done.char.name ? true : false;

  return (
    <section id='MENU'>
      <h2>Character Creator</h2>
      <div className="horizontal-line no-bottom" />
      <ul>
        <Link to="/race">
          <button>
            1. Race
            <span className={props.done.race ? 'done' : null} />
          </button>
        </Link>
        <Link to="/class">
          <button>
            2. Class
            <span className={props.done._class ? 'done' : null} />
          </button>
        </Link>
        <Link to="/score">
          <button>
            3. Ability Scores
            <span className={props.done.score ? 'done' : null} />
          </button>
        </Link>
        <Link to="/background">
          <button>
            4. Background
            <span className={props.done.back ? 'done' : null} />
          </button>
        </Link>
        <Link to="/create" name="create" onClick={props.handleClick}>
          <button className={!all ? 'disabled' : null}>
            5. Create
            <span className={props.done.char ? 'done' : null} />
          </button>
        </Link>
        <Link to="/play" name="final" onClick={props.handleClick}>
          <button className={!final ? 'disabled' : null}>
            6. Play!
            <span className={final ? 'done' : null} />
          </button>
        </Link>
      </ul>
    </section>
  );
};

export default MenuMain;
