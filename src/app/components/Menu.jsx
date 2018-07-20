import * as React from 'react';

import 'Styles/Menu.scss';

const btn = "menu-btn waves-effect waves-light";

const labels = [
  ["race", "1. Race"],
  ["gameClass", "2. Class"],
  ["score", "3. Ability Scores"],
  ["background", "4. Background", true],
  ["create", "5. Create", true]
];

const Menu = (props) => (
  <main>
    <section id='MENU'>
      <h2>Character Creator</h2>
      <div className="horizontal-line no-bottom" />
      <ul>
        {
          labels.map((item) => (
            <button key={item[0]} className={btn} onClick={props[item[0]]} disabled={item[2]}>
              {item[1]}
              <span className={
                props.done.includes(item[0])
                  ? "done"
                  : ""
              }></span>
          </button>
          ))
        }
        <button className={btn} onClick={props.play} disabled>
          6. Play!
          <span className={
            props.done.includes("all")
              ? "play"
              : "play"
          }></span>
        </button>
      </ul>
    </section>
  </main>
);

export default Menu;
