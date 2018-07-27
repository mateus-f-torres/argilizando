import * as React from 'react';

const CharacterPast = (props) => {

  return (
    <figure className="final-card">
      <h3 className="final-header">Role Playing</h3>
      <ul className="stats">
        <li><p className="fake-heading"><b>Background:</b></p></li>
        <li><p className="detailed">{props.background}</p></li>
        <li><p className="fake-heading"><b>Personality:</b></p></li>
        <li><p className="detailed">{props.personality}</p></li>
        <li><p className="fake-heading"><b>Ideals:</b></p></li>
        <li><p className="detailed">{props.ideals}</p></li>
        <li><p className="fake-heading"><b>Bonds:</b></p></li>
        <li><p className="detailed">{props.bonds}</p></li>
        <li><p className="fake-heading"><b>Flaws:</b></p></li>
        <li><p className="detailed">{props.flaws}</p></li>
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

export default CharacterPast;
