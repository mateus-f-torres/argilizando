//@flow
import * as React from 'react';
import type {CharPast} from '../types/index.js';

type Props = CharPast;

const CharacterPast = (props: Props) => {
  return (
    <figure className="card">
      <h3>Role Playing</h3>
      <h4>Background:</h4>
      <p>{props.background}</p>
      <h4>Personality:</h4>
      <p>{props.personality}</p>
      <h4>Ideals:</h4>
      <p>{props.ideals}</p>
      <h4>Bonds:</h4>
      <p>{props.bonds}</p>
      <h4>Flaws:</h4>
      <p>{props.flaws}</p>
      { props.extra && Array.isArray(props.extra) &&
            <div>
              <h4>Extra Details:</h4>
              <ul className="dotted-list">
                {
                  props.extra.map((desc, i) => (
                    <li key={i}>{desc}</li>))
                }
              </ul>
            </div>
      }
    </figure>
  );
};

export default CharacterPast;
