//@flow
import * as React from 'react';
import {Link} from 'react-router-dom';
import type {Race} from '../types/props.js';

import '../data/raceImages.js';

type Props = Race & {
  lockRace: () => void
};

const CardRace = (props: Props) => {
  return (
    <figure className="card">
      <h2>{props.name}</h2>
      <img className="race-img" src={`./../images/${props.id}.png`} />
      <div className="horizontal-line" />
      <ul id="race-stats" className="stats">
        <h3>Race Stats</h3>
        <li><p>
          <b>Height:</b>{props.height}.
        </p></li>
        <li><p>
          <b>Weight:</b>{props.weight}.
        </p></li>
        <li><p>
          <b>Adulthood:</b>{props.age[0]} years.
        </p></li>
        <li><p>
          <b>Lifespan:</b>{props.age[1]} years.
        </p></li>
        <li><p>
          <b>Size:</b>{props.size}.
        </p></li>
        <li><p>
          <b>Speed:</b>{props.speed}ft.
        </p></li>
        <li><p>
          <b>Speaks:</b>{`${props.lang[0]} & ${props.lang[1]}.`}
        </p></li>
      </ul>
      <div className="horizontal-line" />
      <ul id="race-traits">
        <h3>Race Traits</h3>
        {
          props.special.map((trait, i) => (
            <li key={i}>
              <h4>{trait[0]} :</h4>
              <p>{trait[1]}</p>
            </li>
          ))
        }
      </ul>
      <div className="horizontal-line no-bottom" />
      <div className="lock-box">
        <Link to="/race">
          <button>Back</button>
        </Link>
        <Link to="/">
          <button
            data-test="race-lock"
            onClick={props.lockRace}>Lock</button>
        </Link>
      </div>
    </figure>
  );
};

export default CardRace;
