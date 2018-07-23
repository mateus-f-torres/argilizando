//@flow
import * as React from 'react';

type Props = {};

const btn = "btn waves-effect waves-light";

const Background = (props: Props) => (
  <figure className="card">
    <h2>{props.name}</h2>
    <p>{props.pitch}</p>
    <div className="horizontal-line" />
    <h3>Background Traits</h3>
    <h4>Skill Proficiency</h4>
    <ul className="multi small">
      {props.skill.map((sk, i) => <li key={i}>{sk}</li>)}
    </ul>

    { 
      props.tool &&
        <ul className="multi">
          <h4>Tool Proficiency</h4>
          {props.tool.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    }

    { 
      props.lang &&
        <ul className="multi">
          <h4>Languages</h4>
          {props.lang.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    }

    <h4>Equipment</h4>
    <ul className="equip">
      {
        props.equip.map((list, i) => (
          <li key={i}>
            {list.map((item, j) => <span key={j}>{item}<br/></span>)}
          </li>
        ))
      }
    </ul>
    <div className="horizontal-line no-bottom" />
    <button className={btn} onClick={props.hideBack}>Back</button>
    <button className={btn} onClick={props.lockBack}>Next</button>
  </figure>
);

export default Background;
