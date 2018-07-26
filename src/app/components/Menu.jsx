import * as React from 'react';

import 'Styles/Menu.scss';

const btn = "menu-btn waves-effect waves-light";

const labels = [
  ["race", "1. Race"],
  ["gameClass", "2. Class"],
  ["score", "3. Ability Scores"],
  ["background", "4. Background"]
];

const Menu = (props) => {

  let all =
    props.done.race && props.done.gameClass
    && props.done.score && props.done.background
    ? true
    : false;

  let final = props.done.character ? true : false;

  return (
  <main>
    <section id='MENU'>
      <h2>Character Creator</h2>
      <div className="horizontal-line no-bottom" />
      <ul>
        {
          labels.map((item) => (
            <button key={item[0]} className={btn} onClick={props[item[0]]}>
              {item[1]}
              <span className={
                props.done[item[0]]
                  ? "done"
                  : ""
              }></span>
          </button>
          ))
        }
        <button className={btn} onClick={props.character} disabled={!all}>
          5. Create
          <span className={
            props.done.character
              ? "done"
              : ""
          }></span>
        </button>
        <button className={btn} onClick={props.final} disabled={!final}>
          6. Play!
          <span></span>
        </button>
      </ul>
    </section>
  </main>
  )
};

export default Menu;
