//@flow
import * as React from 'react';
import type {CharBody} from '../types/index.js';

type Props = CharBody;

const CharacterBody = (props: Props) => {
  return (
    <figure className="card">
      <h3>Appearance</h3>
      <ul className="stats">
        <li><p><b>Race:</b><span>{props.race}</span></p></li>
        <li><p><b>Gender:</b><span>{props.gender}</span></p></li>
        <li><p><b>Size:</b><span>{props.size}</span></p></li>
        <li><p><b>Age:</b>{props.age}</p></li>
        <li><p><b>Height:</b>{props.height}</p></li>
        <li><p><b>Weight:</b>{props.weight}</p></li>
      </ul>
      <h4>Eyes:</h4>
      <p>{props.eyes}</p>
      <h4>Skin:</h4>
      <p>{props.skin}</p>
      <h4>Hair:</h4>
      <p>{props.hair}</p>
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

export default CharacterBody;
