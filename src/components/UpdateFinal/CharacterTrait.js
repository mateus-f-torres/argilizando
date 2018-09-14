//@flow
import * as React from 'react';
import type {CharTraits} from 'Types/props.js';

type Props = {
  traits: CharTraits,
};

const CharacterTrait = (props: Props) => {
  return (
    <figure className="card">
      <h3>Features &amp; Traits</h3>
      <ul className="stats">
        {
          props.traits.map((item, i) => (
            <li key={i}>
              <h4>{item[0]}</h4>
              <p>{item[1]}</p>
            </li>
          ))
        }
      </ul>
    </figure>
  );
};

export default CharacterTrait;
