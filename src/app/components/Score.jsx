//@flow
import * as React from 'react';

type Props = {};

const btnClass = "score-btn waves-effect waves-light";

const Score = (props: Props) => (
  <li>
    <h4>{props.long}</h4>
    <h5 name={props.short}>
      <span className="score">{props.score}</span>
      <span className="mod">{props.mod > 0 ? "+" + props.mod : props.mod}</span>
      Next lvl cost : <span className="cost">{props.cost}</span>
    </h5>
    <input type="number" name={props.short} />
    <button onClick={props.handleClick} className={btnClass} name="+">+</button>
    <button onClick={props.handleClick} className={btnClass} name="-">-</button>
    <button onClick={props.handleClick} className={btnClass} name="?">?</button>
    {props.show && <p>{props.show}</p>}
  </li>
)

export default Score;
