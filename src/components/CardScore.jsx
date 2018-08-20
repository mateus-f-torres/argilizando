//@flow
import * as React from 'react';
import type {LongScore} from '../types/props.js';

type Props = LongScore & {
  handleClick: (SyntheticEvent<HTMLButtonElement>) => void,
};

const btn = 'score-btn waves-effect waves-light';

const CardScore = (props: Props) => (
  <li>
    <h4>{props.long}</h4>
    <h5 name={props.short}>
      <span className="score">
        {props.score}
      </span>
      <span className="mod">
        {props.mod > 0 ? '+' + props.mod : props.mod}
      </span>
      Next lvl cost : <span className="cost">
        {props.cost}
      </span>
    </h5>
    <button
      data-test="score-plus"
      onClick={props.handleClick}
      className={btn} name="+">+</button>
    <button
      data-test="score-minus"
      onClick={props.handleClick}
      className={btn} name="-">-</button>
    <button
      data-test="score-show"
      onClick={props.handleClick}
      className={btn} name="?">?</button>
    {props.show && <p data-test="score-text">{props.show}</p>}
  </li>
);

export default CardScore;
