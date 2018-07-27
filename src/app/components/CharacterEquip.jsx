import * as React from 'react';

const CharacterEquip = (props) => {

  return (
    <figure className="final-card">
      <h3 className="final-header">Equipment</h3>
      <ul className="stats">
        <li><p className="fake-heading"><b>Weapons</b></p></li>
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
      <ul className="stats">
        <li><p className="fake-heading"><b>Armor</b></p></li>
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
      <ul className="stats">
        <li><p className="fake-heading"><b>Money</b></p></li>
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
      <ul className="stats">
        <li><p className="fake-heading"><b>Miscellaneous</b></p></li>
        {
          props.pack.map((item, i) => (
            <li key={i} className="extra"><p>{item}</p></li>
          ))
        }
      </ul>
    </figure>
  )
}

export default CharacterEquip;
