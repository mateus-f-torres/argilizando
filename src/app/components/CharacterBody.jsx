import * as React from 'react';

const CharacterBody = (props) => {

  return (
    <figure className="final-card">
      <h3 className="final-header">Appearance</h3>
      <ul className="stats">
        <li><p><b>Race:</b><span>{props.race}</span></p></li>
        <li><p><b>Gender:</b><span>{props.gender}</span></p></li>
        <li><p><b>Age:</b>{props.age} years</p></li>
        <li><p><b>Height:</b>{props.height}</p></li>
        <li><p><b>Weight:</b>{props.weight}</p></li>
        <li><p className="fake-heading"><b>Eyes:</b></p></li>
        <li><p className="detailed">{props.eyes}</p></li>
        <li><p className="fake-heading"><b>Skin:</b></p></li>
        <li><p className="detailed">{props.skin}</p></li>
        <li><p className="fake-heading"><b>Hair:</b></p></li>
        <li><p className="detailed">{props.hair}</p></li>
      </ul>
        { props.extra &&
          <ul className="stats">
            <li><p className="fake-heading"><b>Extra Details:</b></p></li>
                {
                  props.extra.map((desc, i) => (
                    <li key={i} className="extra"><p>{desc}</p></li>))
                }
          </ul>
        }
    </figure>
  )
}

export default CharacterBody;
