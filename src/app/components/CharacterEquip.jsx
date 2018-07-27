import * as React from 'react';

const CharacterEquip = (props) => {

  return (
    <figure className="card">
      <h3>Equipment</h3>
      <h4>Weapons:</h4>
      <ul className="stats">
        {
          props.weapons.map((item, i) => (
            <li key={i}>
              <p className="weapon">
                <span>{item[0]}.</span>
                <br />
                <span className="weapon-bonus">
                  +{item[1]}
                </span>
                <span>
                  {`${item[2]} + ${item[3]} ${item[4]}`}
                </span>
              </p>
            </li>
          ))
        }
      </ul>
      <h4>Armor:</h4>
      <ul className="stats">
        {
          props.armor.map((item, i) => (
            <li key={i}>
              <p style={{marginTop: "0.3em", marginBottom: 0}}>
                <span>{item[0]}</span>
                <span className="close">+{item[1]}</span>
              </p>
            </li>
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
          props.pack.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
      </ul>
    </figure>
  )
}

export default CharacterEquip;
