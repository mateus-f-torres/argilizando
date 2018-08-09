import * as React from 'react';

const CharacterSpell = (props) => {
  return (
    <figure className="card">
      <h3>Spellcasting</h3>
      { props.notYet && <h4>Starting at lvl 2</h4> }
      <ul className="stats">
        <li><p><b>Spell Class:</b>
          <span className="close">{props._class}</span>
        </p></li>
        <li><p><b>Spell Ability:</b>
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
        <li><p><b>1st lvl Spells Slots:</b>
          <span className="close">{props.slots}</span>
        </p></li>
        <li><p><b>Ritual Casting</b>
          <span className="close">{props.ritual ? "Yes" : "No"}</span>
        </p></li>
        <li><p><b>Spell Focus</b>
          <span className="close">{props.focus ? props.focus : "No"}</span>
        </p></li>
      </ul>

      <div className="horizontal-line no-bottom" />
      <ul className="sidenotes">
        <li>
          <cite>* Spell Save DC</cite>
          <p className="note">8 + proficiency + ability modifier.</p>
        </li>
        <li>
          <cite>* Spell Attack Bonus</cite>
          <p className="note">proficiency + ability modifier.</p>
        </li>
        <li>
          <cite>* Spells Known</cite>
          {
            props.known === 0
              ? <p className="note">knows all spells available.</p>
              : <p className="note">from class table.</p>
          }
        </li>
        <li>
          <cite>* Spell Prepared</cite>
          {
            props.prepared === 0
              ? <p className="note">all known spells are prepared.</p>
              : props.spellClass !== 'paladin'
                ? <p className="note">ability modifier + lvl.</p>
                : <p className="note">ability modifier + lvl/2.</p>
          }
        </li>
        {
          props.ritual
            ? <li>
              <cite>* Ritual Casting</cite>
              <p className="note">
              10min to cast.
                <br />
              doesn't expend a spell slot.
              </p>
            </li>
            : null
        }
        <li>
          <cite>* Spell Focus</cite>
          <p className="note">
            used as material components.
            <br />
            consumed material components must still be provided.
          </p>
        </li>
      </ul>
    </figure>
  );
};

export default CharacterSpell;
