//@flow
import * as React from 'react';
import type {Score} from '../types/index.js';

type Props = Score & {
  handleClick: (SyntheticEvent<HTMLButtonElement>) => void,
};

const btn = 'score-btn waves-effect waves-light';

const CardScore = (props: Props) => (
  <li>
    <h4>{props.long}</h4>
    <h5 name={props.short}>
      <span className="score">{props.score}</span>
      <span className="mod">{props.mod > 0 ? '+' + props.mod : props.mod}</span>
      Next lvl cost : <span className="cost">{props.cost}</span>
    </h5>
    <button onClick={props.handleClick} className={btn} name="+">+</button>
    <button onClick={props.handleClick} className={btn} name="-">-</button>
    <button onClick={props.handleClick} className={btn} name="?">?</button>
    {props.show && <p>{props.show}</p>}
  </li>
);

export default CardScore;
