import * as React from 'react';

const CharacterEquip = (props) => {
  return (
    <figure className="card">
      <h3>Equipment</h3>
      <h4>Gear:</h4>
      <ul className="dotted-list">
        {
          props.gear.map((item, i) => (
            <li key={i}>{item[1]}</li>
          ))
        }
        {
          props.pack.fromClass.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
      </ul>

      <h4>Money:</h4>
      <ul className="stats">
        <li>
          <p style={{marginTop: "0.3em", marginBottom: 0}}>
            <span>Copper (CP)</span>
            <span className="close">{props.money.cp}</span>
          </p>
        </li>
        <li>
          <p style={{marginTop: "0.3em", marginBottom: 0}}>
            <span>Silver (SP)</span>
            <span className="close">{props.money.sp}</span>
          </p>
        </li>
        <li>
          <p style={{marginTop: "0.3em", marginBottom: 0}}>
            <span>Gold (GP)</span>
            <span className="close">{props.money.gp}</span>
          </p>
        </li>
        <li>
          <p style={{marginTop: "0.3em", marginBottom: 0}}>
            <span>Platinum (PP)</span>
            <span className="close">{props.money.pp}</span>
          </p>
        </li>
      </ul>
      <h4>Miscellaneous</h4>
      <ul className="dotted-list">
        {
          props.pack.fromPack.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
        {
          props.pack.fromBack.map((item, i) => {
            return item.length === 1
              ? <li key={i}>{item}</li>
              : <li key={i}>
                {
                  item.map((sub, j) => <span key={j}>{sub}<br/></span>)
                }</li>;
          })
        }
      </ul>

      <div className="horizontal-line no-bottom" />
      <ul className="sidenotes">
        <li>
          <cite>* Melee Attack Bonus</cite>
          <p className="note">proficiency + Strength modifier.</p>
        </li>
        <li>
          <cite>* Range Attack Bonus</cite>
          <p className="note">proficiency + Dexterity modifier.</p>
        </li>
        <li>
          <cite>* Damage Roll</cite>
          <p className="note">weapon dice + ability modifier.</p>
        </li>
        <li>
          <cite>* Ammunition</cite>
          <p className="note">
            after combat you can recover up to half your expended ammo.</p>
        </li>
        <li>
          <cite>* Finesse</cite>
          <p className="note">
            chose between Strength or Dexterity on attack rolls.</p>
        </li>
        <li>
          <cite>* Heavy</cite>
          <p className="note">
            small creature attack at disadvantage with this weapon.</p>
        </li>
        <li>
          <cite>* Light</cite>
          <p className="note">
            two-weapon fighting is available with this weapon.</p>
        </li>
        <li>
          <cite>* Loading</cite>
          <p className="note">
            fire once per type of action, even with extra attack.</p>
        </li>
        <li>
          <cite>* Range</cite>
          <p className="note">
            (normal range / long range).
            <br />
            beyond normal = disadvantage.
            <br />
            beyond long = miss.
          </p>
        </li>
        <li>
          <cite>* Reach</cite>
          <p className="note">add 5ft to your melee reach.</p>
        </li>
        <li>
          <cite>* Thrown</cite>
          <p className="note">
            use same ability modifier as in melee attacks.</p>
        </li>
        <li>
          <cite>* Two-Handed</cite>
          <p className="note">two-handed use only.</p>
        </li>
        <li>
          <cite>* Versatile</cite>
          <p className="note">chose between one or two-handed use.</p>
        </li>
      </ul>
    </figure>
  );
};

export default CharacterEquip;
