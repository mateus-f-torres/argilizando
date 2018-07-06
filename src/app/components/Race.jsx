//@flow
import * as React from 'react';

type Props = {};

const btnClass = "btn waves-effect waves-light";

const Race = (props: Props) => (
  <figure>
    <button className={btnClass} onClick={props.hideRace}>Back</button>
    <button className={btnClass} onClick={props.lockRace}>Lock</button>
    <h3>{props.name}</h3>
    <h4>{props.pitch}</h4>
    <p>Average height: {props.height}ft tall.</p>
    <p>Average weight: {props.weight} pounds.</p>
    <p>Average lifespan: from {props.age[0]} to {props.age[1]} years.</p>
    <p>Your player size is considered {props.size}.</p>
    <p>Your player speed is {props.speed}ft.</p>
    <p>You can speak {props.lang[0]} and {props.lang[1]}.</p>
    <ul>
      <h5>Special Traits</h5>
      {
        props.special.map((trait, i) => (
        <li key={i}>
          <h6>{trait[0]}</h6>
          <p>{trait[1]}</p>
        </li>
        ))
      }
    </ul>
  </figure>
);

export default Race;
