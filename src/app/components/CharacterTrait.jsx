import * as React from 'react';

const CharacterTrait = (props) => {

  return (
    <figure className="final-card">
      <h3 className="final-header">Features &amp; Traits</h3>
      <ul className="stats">
        {
          props.traits.map((item, i) => (
            <div key={i}>
              <li><p className="fake-heading"><b>{item[0]}</b></p></li>
              <li><p>{item[1]}</p></li>
            </div>
          ))
        }
      </ul>
    </figure>
  )
}

export default CharacterTrait;
