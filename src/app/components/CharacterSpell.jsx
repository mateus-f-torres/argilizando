import * as React from 'react';

const CharacterSpell = (props) => {

  return (
    <figure className="card">
      <h3>Spellcasting</h3>
      <ul className="stats">
        <li><p><b>Spellcasting Class:</b>
          <span className="close">{props.spellClass}</span>
        </p></li>
        <li><p><b>Spellcasting Ability:</b>
          <span className="close">{props.ability}</span>
        </p></li>
        <li><p><b>Spell Save DC:</b>
          <span className="close">{props.save}</span>
        </p></li>
        <li><p><b>Spell Attack Bonus:</b>
          <span className="close">+{props.toHit}</span>
        </p></li>
        <li><p><b>Cantrips Known:</b>
          <span className="close">{props.cantrips}</span>
        </p></li>
        <li><p><b>Spells Known:</b>
          <span className="close">{props.known}</span>
        </p></li>
        <li><p><b>Spells Prepared:</b>
          <span className="close">{props.prepared}</span>
        </p></li>
        <li><p><b>Spells Slots:</b>
          <span className="close">{props.slots[0][0]}</span>
        </p></li>
      </ul>
    </figure>
  )
}

export default CharacterSpell;
