import * as React from 'react';

import 'Styles/Menu.scss';

const btnClass = "menu-btn waves-effect waves-light";

const Menu = (props) => (
  <form>
    <section id='MENU'>
      <h2>Character Creator</h2>
      <hr />
      <ul>
        <button className={btnClass} onClick={props.race}>
          1. Race 
          <span className={
            props.done.includes("race")
              ? "done"
              : ""
          }></span>
        </button>
        <button className={btnClass} disabled>
          2. Class
          <span className={
            props.done.includes("class")
              ? "done"
              : ""
          }></span>
        </button>
        <button className={btnClass}  onClick={props.score}>
          3. Ability Scores
          <span className={
            props.done.includes("score")
              ? "done"
              : ""
          }></span>
        </button>
        <button className={btnClass} disabled>
          4. Background
          <span className={
            props.done.includes("background")
              ? "done"
              : ""
          }></span>
        </button>
        <button className={btnClass} disabled>
          5. Equipment
          <span className={
            props.done.includes("equipment")
              ? "done"
              : ""
          }></span>
        </button>
        <button className={btnClass} disabled>
          6. Play!
          <span className={
            props.done.includes("play")
              ? "play"
              : ""
          }></span>
        </button>
    </ul>
    </section>
  </form>
);

export default Menu;
